import React, { useState, useEffect, useMemo } from 'react';
import { 
  User, Lock, Mail, Book, Search, MessageSquare, Plus, Users, 
  Briefcase, ArrowRight, X, Menu, DollarSign, Repeat, MapPin, UserCheck,
  HelpCircle, Info, ClipboardList, Zap, MessageCircle, UserSearch,
  ChevronDown, Send, Settings, LogOut, Heart, Home, ThumbsUp, MessageSquareReply,
  Upload, CheckCircle, GraduationCap, Award
} from 'lucide-react';
import { initializeApp, setLogLevel } from 'firebase/app';
import { 
  getAuth, 
  onAuthStateChanged, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  updateProfile 
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  collection, 
  addDoc, 
  query, 
  where, 
  onSnapshot, 
  serverTimestamp,
  orderBy,
  getDocs,
  updateDoc
} from "firebase/firestore";
import { 
  getStorage, 
  ref, 
  uploadBytes, 
  getDownloadURL 
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDty5os84VgLNRZTDAHErleYUOc9zBnaa0",
  authDomain: "hyperlocal1.firebaseapp.com",
  projectId: "hyperlocal1",
  storageBucket: "hyperlocal1.appspot.com",
  messagingSenderId: "43216293091",
  appId: "1:43216293091:web:8b4b2de5dbd428e2f389d6",
  measurementId: "G-13PVX571LT"
};

let app, auth, db, storage;
try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
  setLogLevel('debug');
} catch (error) {
  console.error("Firebase initialization error:", error);
}

export default function App() {
  const [page, setPage] = useState('home');
  const [user, setUser] = useState(null);
  const [authIsReady, setAuthIsReady] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTeacherId, setSelectedTeacherId] = useState(null);
  const [selectedConversation, setSelectedConversation] = useState(null);

  const navigateTo = (pageName, data = {}) => {
    setPage(pageName);
    setIsMobileMenuOpen(false);
    if (data.searchTerm) setSearchTerm(data.searchTerm);
    if (data.teacherId) setSelectedTeacherId(data.teacherId);
    if (data.conversation) setSelectedConversation(data.conversation);
    else setSelectedConversation(null);
  };

  useEffect(() => {
    if (!auth) return;
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setAuthIsReady(true);
      if (!user) {
        navigateTo('home');
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignUp = async (email, password, name, role, location) => {
    if (!auth || !db) return;
    setAuthError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      await updateProfile(user, { displayName: name });
      
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: name,
        email: email,
        role: role,
        location: location,
        bio: `Hi, I'm ${name}. I'm new to Hyperlocal and looking to ${role === 'learner' ? 'learn new skills' : 'teach my skills'}!`,
        createdAt: serverTimestamp(),
        photoURL: ""
      });
      navigateTo('dashboard');
    } catch (error) {
      console.error("Sign up error:", error);
      setAuthError(error.message);
    }
  };

  const handleLogin = async (email, password) => {
    if (!auth) return;
    setAuthError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigateTo('dashboard');
    } catch (error) {
      console.error("Login error:", error);
      setAuthError(error.message);
    }
  };

  const handleLogout = async () => {
    if (!auth) return;
    try {
      await signOut(auth);
      navigateTo('home');
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage navigateTo={navigateTo} />;
      case 'browse':
        return user ? <BrowsePage navigateTo={navigateTo} searchTerm={searchTerm} /> : <LoginPage {...authHandlers} />;
      case 'teacherProfile':
        return user ? <TeacherProfilePage navigateTo={navigateTo} teacherId={selectedTeacherId} currentUser={user} /> : <LoginPage {...authHandlers} />;
      case 'dashboard':
        return user ? <DashboardPage navigateTo={navigateTo} user={user} handleLogout={handleLogout} selectedConversation={selectedConversation} /> : <LoginPage {...authHandlers} />;
      case 'login':
        return user ? <DashboardPage navigateTo={navigateTo} user={user} handleLogout={handleLogout} selectedConversation={selectedConversation} /> : <LoginPage {...authHandlers} />;
      case 'how-it-works':
        return <HowItWorksPage />;
      case 'about':
        return <AboutUsPage />;
      case 'help':
        return <HelpPage />;
      case 'contact':
        return <ContactUsPage />;
      case 'community':
        return <CommunityPage navigateTo={navigateTo} currentUser={user} />;
      case 'favorites':
        return user ? <MyFavoritesPage navigateTo={navigateTo} currentUser={user} /> : <LoginPage {...authHandlers} />;
      case 'settings':
        return user ? <SettingsPage navigateTo={navigateTo} currentUser={user} handleLogout={handleLogout} /> : <LoginPage {...authHandlers} />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };
  
  const authHandlers = { navigateTo, handleLogin, handleSignUp, authError, setAuthError };

  if (!authIsReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-3xl font-bold text-indigo-600">Loading Hyperlocal...</h1>
      </div>
    );
  }
  
  if (!auth || !db) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
        <h1 className="text-3xl font-bold text-red-600 text-center">
          Firebase configuration error. Please check your `firebaseConfig` object.
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {page !== 'dashboard' && (
        <Navbar 
          navigateTo={navigateTo} 
          user={user} 
          handleLogout={handleLogout} 
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      )}
      <main className={page === 'dashboard' ? 'h-screen' : 'pt-20'}>
        {renderPage()}
      </main>
      {page !== 'dashboard' && <Footer navigateTo={navigateTo} user={user} />}
    </div>
  );
}

function Navbar({ navigateTo, user, handleLogout, isMobileMenuOpen, setIsMobileMenuOpen }) {
  const navItems = [
    { name: 'How It Works', page: 'how-it-works' },
    { name: 'About Us', page: 'about' },
    { name: 'Community', page: 'community' },
  ];

  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => navigateTo('home')} className="flex items-center text-3xl font-bold text-indigo-600 focus:outline-none">
            <Users className="h-8 w-8 mr-2" />
            Hyperlocal
          </button>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigateTo(item.page)}
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium transition duration-150 ease-in-out"
              >
                {item.name}
              </button>
            ))}

            <div className="relative">
              <button
                onClick={() => setIsSupportOpen(!isSupportOpen)}
                onBlur={() => setTimeout(() => setIsSupportOpen(false), 200)}
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium transition duration-150 ease-in-out flex items-center"
              >
                Support <ChevronDown className={`h-5 w-5 ml-1 transition-transform ${isSupportOpen ? 'rotate-180' : 'rotate-0'}`} />
              </button>
              {isSupportOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 overflow-hidden border border-gray-100">
                  <button
                    onClick={() => { navigateTo('help'); setIsSupportOpen(false); }}
                    className="block w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 transition duration-150"
                  >
                    Help Center
                  </button>
                  <button
                    onClick={() => { navigateTo('contact'); setIsSupportOpen(false); }}
                    className="block w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 transition duration-150"
                  >
                    Contact Us
                  </button>
                </div>
              )}
            </div>
            
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  onBlur={() => setTimeout(() => setIsUserMenuOpen(false), 200)}
                  className="flex items-center justify-center h-12 w-12 bg-indigo-600 text-white rounded-full font-semibold text-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="Profile" className="h-12 w-12 rounded-full object-cover" />
                  ) : (
                    user.displayName ? user.displayName.split(' ').map(n => n[0]).join('').toUpperCase() : <User className="h-6 w-6" />
                  )}
                </button>
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50 overflow-hidden border border-gray-100">
                    <div className="px-4 py-3 border-b border-gray-200">
                      <p className="text-lg font-medium text-gray-900 truncate">{user.displayName}</p>
                      <p className="text-base text-gray-500 truncate">{user.email}</p>
                    </div>
                    <div className="py-1">
                      <button
                        onClick={() => { navigateTo('dashboard'); setIsUserMenuOpen(false); }}
                        className="flex items-center w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 transition duration-150"
                      >
                        <Home className="h-5 w-5 mr-3" /> Dashboard
                      </button>
                      <button
                        onClick={() => { navigateTo('browse'); setIsUserMenuOpen(false); }}
                        className="flex items-center w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 transition duration-150"
                      >
                        <Search className="h-5 w-5 mr-3" /> Browse Skills
                      </button>
                      <button
                        onClick={() => { navigateTo('favorites'); setIsUserMenuOpen(false); }}
                        className="flex items-center w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 transition duration-150"
                      >
                        <Heart className="h-5 w-5 mr-3" /> My Favorites
                      </button>
                      <button
                        onClick={() => { navigateTo('settings'); setIsUserMenuOpen(false); }}
                        className="flex items-center w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 transition duration-150"
                      >
                        <Settings className="h-5 w-5 mr-3" /> Settings
                      </button>
                    </div>
                    <div className="border-t border-gray-200 py-1">
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 transition duration-150"
                      >
                        <LogOut className="h-5 w-5 mr-3" /> Log Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button 
                onClick={() => navigateTo('login')}
                className="bg-indigo-600 text-white px-5 py-2 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-150 ease-in-out shadow-sm"
              >
                Login / Sign Up
              </button>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X className="block h-8 w-8" /> : <Menu className="block h-8 w-8" />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigateTo(item.page)}
                className="text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out"
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={() => navigateTo('help')}
              className="text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out"
            >
              Help Center
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out"
            >
              Contact Us
            </button>
            
            {user ? (
              <>
                <div className="border-t border-gray-200 mt-2 pt-2">
                  <button 
                    onClick={() => navigateTo('dashboard')}
                    className="text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out"
                  >
                    Dashboard
                  </button>
                  <button 
                    onClick={() => navigateTo('browse')}
                    className="text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out"
                  >
                    Browse Skills
                  </button>
                  <button 
                    onClick={() => navigateTo('favorites')}
                    className="text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out"
                  >
                    My Favorites
                  </button>
                  <button 
                    onClick={() => navigateTo('settings')}
                    className="text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out"
                  >
                    Settings
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="bg-indigo-600 text-white w-full text-left mt-2 px-4 py-2 rounded-lg text-base font-medium hover:bg-indigo-700 transition duration-150 ease-in-out shadow-sm"
                  >
                    Log Out
                  </button>
                </div>
              </>
            ) : (
              <button 
                onClick={() => navigateTo('login')}
                className="bg-indigo-600 text-white w-full text-left mt-2 px-4 py-2 rounded-lg text-base font-medium hover:bg-indigo-700 transition duration-150 ease-in-out shadow-sm"
              >
                Login / Sign Up
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

function Footer({ navigateTo, user }) {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white">Platform</h3>
            <ul className="mt-4 space-y-2">
              {user && (
                <li><button onClick={() => navigateTo('browse')} className="hover:text-white">Browse Skills</button></li>
              )}
              <li><button onClick={() => navigateTo('how-it-works')} className="hover:text-white">How It Works</button></li>
              <li><button onClick={() => navigateTo('login')} className="hover:text-white">Become a Teacher</button></li>
              <li><button onClick={() => navigateTo('community')} className="hover:text-white">Community</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><button onClick={() => navigateTo('about')} className="hover:text-white">About Us</button></li>
              <li><button disabled className="opacity-50 cursor-not-allowed">Careers</button></li>
              <li><button disabled className="opacity-50 cursor-not-allowed">Press</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><button onClick={() => navigateTo('help')} className="hover:text-white">Help Center</button></li>
              <li><button onClick={() => navigateTo('contact')} className="hover:text-white">Contact Us</button></li>
              <li><button disabled className="opacity-50 cursor-not-allowed">Privacy Policy</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <ul className="mt-4 space-y-2">
              <li><button disabled className="opacity-50 cursor-not-allowed">Twitter</button></li>
              <li><button disabled className="opacity-50 cursor-not-allowed">Instagram</button></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Hyperlocal. Share skills with your neighbors.</p>
        </div>
      </div>
    </footer>
  );
}

function HomePage({ navigateTo }) {
  const [term, setTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navigateTo('browse', { searchTerm: term });
  };

  return (
    <>
      <div className="bg-indigo-50">
        <section className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] py-24 px-4 sm:px-6 lg:px-8">
          <h1 className="font-extrabold text-5xl sm:text-6xl md:text-7xl text-center">
            <span className="block text-gray-900">Learn anything.</span>
            <span className="block text-indigo-600">From your neighbors.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-center text-xl text-gray-700 leading-relaxed">
            Hyperlocal is a skill-sharing platform connecting you with teachers and learners right in your own neighborhood.
          </p>
          
          <form onSubmit={handleSearch} className="mt-12 w-full max-w-2xl">
            <div className="relative">
              <input
                type="search"
                placeholder="What do you want to learn? (e.g., 'guitar', 'baking', 'python')"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="w-full text-lg p-5 pl-14 rounded-full shadow-lg border-2 border-transparent focus:outline-none focus:border-indigo-500"
              />
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
              <button
                type="submit"
                className="absolute inset-y-0 right-0 m-2 px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700"
              >
                Search
              </button>
            </div>
          </form>
          
          <div className="mt-10 flex justify-center">
            <button 
              onClick={() => navigateTo('login')}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-150 ease-in-out shadow-sm"
            >
              Become a Teacher
            </button>
          </div>
        </section>
      </div>

      <HowItWorksSection />
    </>
  );
}

function BrowsePage({ navigateTo, searchTerm }) {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const skillsQuery = query(collection(db, "skills"));
    
    const unsubscribe = onSnapshot(skillsQuery, (querySnapshot) => {
      const skillsData = [];
      querySnapshot.forEach((doc) => {
        skillsData.push({ id: doc.id, ...doc.data() });
      });
      setSkills(skillsData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching skills:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const filteredSkills = useMemo(() => {
    if (!searchTerm) return skills;
    const lowerCaseSearch = searchTerm.toLowerCase();
    return skills.filter(skill => 
      skill.skillName.toLowerCase().includes(lowerCaseSearch) ||
      (skill.description && skill.description.toLowerCase().includes(lowerCaseSearch)) ||
      (skill.teacherName && skill.teacherName.toLowerCase().includes(lowerCaseSearch))
    );
  }, [skills, searchTerm]);

  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          {searchTerm ? `Results for "${searchTerm}"` : "Browse All Skills"}
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          {filteredSkills.length} {filteredSkills.length === 1 ? 'skill' : 'skills'} found in your area.
        </p>
        
        {loading ? (
          <p>Loading skills...</p>
        ) : filteredSkills.length === 0 ? (
          <p>No skills found. Try a different search!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} navigateTo={navigateTo} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function SkillCard({ skill, navigateTo }) {
  const getCompensationIcon = (type) => {
    if (type === 'Monetary Fee') return <DollarSign className="h-5 w-5 mr-1" />;
    if (type === 'Skill Exchange') return <Repeat className="h-5 w-5 mr-1" />;
    return <DollarSign className="h-5 w-5 mr-1" />;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col">
      <div className="p-6 flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{skill.skillName}</h3>
        <p className="text-lg text-gray-700 mb-4 h-24 overflow-hidden text-ellipsis">{skill.description}</p>
        
        <div className="flex items-center text-indigo-600 font-semibold mb-2">
          {getCompensationIcon(skill.compensation)}
          <span>{skill.compensation}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <UserCheck className="h-5 w-5 mr-2" />
          <span>Taught by {skill.teacherName}</span>
        </div>
      </div>
      <div className="p-6 bg-gray-50 border-t border-gray-200">
        <button 
          onClick={() => navigateTo('teacherProfile', { teacherId: skill.teacherId })}
          className="w-full text-center bg-indigo-100 text-indigo-700 px-5 py-3 rounded-lg text-lg font-medium hover:bg-indigo-200 transition duration-150 ease-in-out"
        >
          View Profile & Connect
        </button>
      </div>
    </div>
  );
}

function TeacherProfilePage({ navigateTo, teacherId, currentUser }) {
  const [teacher, setTeacher] = useState(null);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [messageError, setMessageError] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    if (!teacherId) {
      navigateTo('browse');
      return;
    }
    setLoading(true);

    const fetchProfile = async () => {
      if (!db || !teacherId) return;
      const docRef = doc(db, "users", teacherId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setTeacher(docSnap.data());
      } else {
        console.error("No such teacher profile!");
        navigateTo('browse');
      }
    };

    const skillsQuery = query(collection(db, "skills"), where("teacherId", "==", teacherId));
    const unsubscribeSkills = onSnapshot(skillsQuery, (querySnapshot) => {
      const skillsData = [];
      querySnapshot.forEach((doc) => {
        skillsData.push({ id: doc.id, ...doc.data() });
      });
      setSkills(skillsData);
    });

    Promise.all([fetchProfile()]).finally(() => setLoading(false));

    return () => unsubscribeSkills();
  }, [teacherId, navigateTo]);

  const handleStartConversation = async () => {
    if (!currentUser) {
      navigateTo('login');
      return;
    }
    if (currentUser.uid === teacherId) {
      setMessageError("You cannot message yourself.");
      return;
    }

    setIsConnecting(true);
    setMessageError(null);
    
    try {
      const convoQuery = query(
        collection(db, "conversations"),
        where("participants", "array-contains", currentUser.uid)
      );
      
      const querySnapshot = await getDocs(convoQuery);
      let existingConvo = null;

      querySnapshot.forEach(doc => {
        const convo = doc.data();
        if (convo.participants.includes(teacherId)) {
          existingConvo = { id: doc.id, ...convo };
        }
      });
      
      let convoId;
      if (existingConvo) {
        convoId = existingConvo.id;
      } else {
        const newConvoRef = await addDoc(collection(db, "conversations"), {
          participants: [currentUser.uid, teacherId],
          participantNames: {
            [currentUser.uid]: auth.currentUser.displayName || auth.currentUser.email,
            [teacherId]: teacher.name
          },
          lastMessage: "Conversation started.",
          lastMessageAt: serverTimestamp(),
        });
        convoId = newConvoRef.id;
      }
      
      navigateTo('dashboard', { conversation: { id: convoId } });

    } catch (error) {
      console.error("Error starting conversation: ", error);
      setMessageError("Could not start conversation. Please try again.");
    } finally {
      setIsConnecting(false);
    }
  };

  if (loading) {
    return <div className="py-24 px-4 text-center">Loading teacher profile...</div>;
  }
  
  if (!teacher) {
    return <div className="py-24 px-4 text-center">Could not find teacher.</div>;
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start">
          <User className="h-32 w-32 bg-gray-200 text-gray-500 p-4 rounded-full" />
          <div className="sm:ml-8 mt-6 sm:mt-0 text-center sm:text-left">
            <h1 className="text-5xl font-extrabold text-gray-900">{teacher.name}</h1>
            <div className="flex items-center justify-center sm:justify-start mt-4 text-lg text-gray-600">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{teacher.location}</span>
            </div>
            <p className="mt-4 text-xl text-gray-700 max-w-lg">{teacher.bio}</p>
          </div>
        </div>

        <div className="mt-10">
          <button 
            onClick={handleStartConversation}
            disabled={isConnecting}
            className="w-full max-w-lg mx-auto sm:mx-0 flex items-center justify-center bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-150 ease-in-out shadow-sm disabled:bg-gray-400"
          >
            <MessageSquare className="h-6 w-6 mr-3" />
            {isConnecting ? "Connecting..." : `Connect with ${teacher.name.split(' ')[0]}`}
          </button>
          {messageError && <p className="text-red-600 mt-2 text-center sm:text-left">{messageError}</p>}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills Offered</h2>
          {skills.length > 0 ? (
            <div className="space-y-6">
              {skills.map(skill => (
                <div key={skill.id} className="p-6 bg-indigo-50 border border-indigo-100 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900">{skill.skillName}</h3>
                  <div className="flex items-center text-indigo-600 font-semibold my-3">
                    {skill.compensation === 'Monetary Fee' ? <DollarSign className="h-5 w-5 mr-1" /> : <Repeat className="h-5 w-5 mr-1" />}
                    <span>{skill.compensation}</span>
                  </div>
                  <p className="text-lg text-gray-700">{skill.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-lg text-gray-600">This teacher hasn't listed any skills yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}

function LoginPage({ navigateTo, handleLogin, handleSignUp, authError, setAuthError }) {
  const [isLoginView, setIsLoginView] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('learner');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setAuthError(null);
    if (isLoginView) {
      handleLogin(email, password);
    } else {
      if (!name || !role || !location) {
        setAuthError("Please fill out all fields.");
        return;
      }
      handleSignUp(email, password, name, role, location);
    }
  };

  return (
    <section className="bg-gray-50 py-20 md:py-32">
      <div className="flex flex-col items-center justify-center px-6 mx-auto">
        <div className="w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl">
              {isLoginView ? 'Sign in to your account' : 'Create an account'}
            </h1>
            
            {authError && <p className="p-3 bg-red-100 text-red-700 rounded-lg">{authError}</p>}

            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              
              {!isLoginView && (
                <>
                  <FormInput id="name" type="text" value={name} onChange={setName} placeholder="Your Full Name" Icon={User} />
                  <FormInput id="location" type="text" value={location} onChange={setLocation} placeholder="Your Neighborhood" Icon={MapPin} />
                  <div>
                    <label className="block mb-2 text-lg font-medium text-gray-900">I am a...</label>
                    <div className="flex space-x-4">
                      <RadioRole id="role-learner" value="learner" checked={role === 'learner'} onChange={setRole} Icon={Book} label="Learner" />
                      <RadioRole id="role-teacher" value="teacher" checked={role ==='teacher'} onChange={setRole} Icon={Briefcase} label="Teacher" />
                    </div>
                  </div>
                </>
              )}
              
              <FormInput id="email" type="email" value={email} onChange={setEmail} placeholder="your.email@example.com" Icon={Mail} />
              <FormInput id="password" type="password" value={password} onChange={setPassword} placeholder="••••••••" Icon={Lock} />
              
              <button
                type="submit"
                className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-lg px-5 py-3 text-center transition duration-150 ease-in-out"
              >
                {isLoginView ? 'Sign in' : 'Create account'}
              </button>
              
              <p className="text-lg font-light text-gray-600">
                {isLoginView ? "Don’t have an account yet? " : "Already have an account? "}
                <button
                  type="button"
                  onClick={() => setIsLoginView(!isLoginView)}
                  className="font-medium text-indigo-600 hover:underline"
                >
                  {isLoginView ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormInput({ id, type, value, onChange, placeholder, Icon }) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">{placeholder}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-6 w-6 text-gray-400" />
        </div>
        <input
          type={type}
          name={id}
          id={id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full pl-11 p-3"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
        />
      </div>
    </div>
  );
}

function FormTextArea({ id, value, onChange, placeholder, Icon }) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">{placeholder}</label>
      <div className="relative">
        <div className="absolute top-3 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-6 w-6 text-gray-400" />
        </div>
        <textarea
          name={id}
          id={id}
          rows={4}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full pl-11 p-3"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
        />
      </div>
    </div>
  );
}

function RadioRole({ id, value, checked, onChange, label, Icon }) {
  return (
    <div className="flex-1">
      <input 
        type="radio" 
        id={id} 
        name="role" 
        value={value} 
        checked={checked} 
        onChange={(e) => onChange(e.target.value)}
        className="sr-only"
      />
      <label
        htmlFor={id}
        className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer ${
          checked ? 'border-indigo-600 bg-indigo-50' : 'border-gray-300 bg-gray-50'
        }`}
      >
        <Icon className={`h-8 w-8 mb-2 ${checked ? 'text-indigo-600' : 'text-gray-500'}`} />
        <span className={`text-lg font-medium ${checked ? 'text-indigo-700' : 'text-gray-700'}`}>{label}</span>
      </label>
    </div>
  );
}

function DashboardPage({ navigateTo, user, handleLogout, selectedConversation }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dashboardPage, setDashboardPage] = useState('overview');

  useEffect(() => {
    if (selectedConversation) {
      setDashboardPage('messages');
    }
  }, [selectedConversation]);

  useEffect(() => {
    if (!user || !db) {
      setLoading(false);
      return;
    }
    setLoading(true);

    const fetchProfile = async () => {
      const docRef = doc(db, "users", user.uid);
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfile(docSnap.data());
        } else {
          console.warn("No user profile found! Creating one.");
          const defaultProfile = {
            uid: user.uid,
            name: user.displayName || "New User",
            email: user.email,
            role: "learner",
            location: "Not set",
            bio: `Hi, I'm ${user.displayName || "a new user"}!`,
            createdAt: serverTimestamp(),
            photoURL: ""
          };
          await setDoc(docRef, defaultProfile);
          setProfile(defaultProfile);
        }
      } catch (error) {
        console.error("Error fetching/creating profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
    
  }, [user]);

  const renderDashboardPage = () => {
    switch (dashboardPage) {
      case 'overview':
        return <DashboardOverview user={user} profile={profile} navigateTo={navigateTo} setDashboardPage={setDashboardPage} />;
      case 'messages':
        return <MessagingTab user={user} navigateTo={navigateTo} initialConvo={selectedConversation} />;
      case 'community':
        return <CommunityPage navigateTo={navigateTo} currentUser={user} isDashboard={true} />;
      case 'profile':
        return <ProfileTab profile={profile} user={user} />;
      case 'skills':
        return <ManageSkillsTab user={user} profile={profile} />;
      case 'favorites':
        return <FavoritesTab navigateTo={navigateTo} user={user} />;
      default:
        return <DashboardOverview user={user} profile={profile} navigateTo={navigateTo} setDashboardPage={setDashboardPage} />;
    }
  };

  if (loading) {
    return (
      <div className="py-24 px-4 text-center min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Loading dashboard...</p>
      </div>
    );
  }

  if (!profile) {
     return (
      <div className="py-24 px-4 text-center min-h-screen flex items-center justify-center">
        <p className="text-lg text-red-600">Error: Could not load user profile. Please try logging out and back in.</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <DashboardSidebar 
        user={user} 
        handleLogout={handleLogout} 
        navigateTo={navigateTo} 
        dashboardPage={dashboardPage} 
        setDashboardPage={setDashboardPage} 
        profile={profile}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader 
          user={user} 
          handleLogout={handleLogout} 
          navigateTo={navigateTo} 
          dashboardPage={dashboardPage} 
        />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6 md:p-10">
          {renderDashboardPage()}
        </main>
      </div>
    </div>
  );
}

function DashboardSidebar({ user, handleLogout, navigateTo, dashboardPage, setDashboardPage, profile }) {
  const sidebarNav = [
    { name: 'Overview', page: 'overview', icon: Home },
    { name: 'Messages', page: 'messages', icon: MessageSquare },
    { name: 'Community', page: 'community', icon: Users },
    { name: 'Profile', page: 'profile', icon: User },
    { name: 'Favorites', page: 'favorites', icon: Heart },
  ];
  
  if (profile?.role === 'teacher') {
    sidebarNav.push({ name: 'Add/Manage Skills', page: 'skills', icon: Plus });
  }

  return (
    <div className="hidden md:flex md:flex-col md:w-64 bg-white border-r border-gray-200">
      <div className="flex flex-col flex-grow pt-5">
        <div className="flex items-center flex-shrink-0 px-4">
          <button onClick={() => navigateTo('home')} className="flex items-center text-2xl font-bold text-indigo-600 focus:outline-none">
            <Users className="h-7 w-7 mr-2" />
            Hyperlocal
          </button>
        </div>
        <p className="text-sm text-gray-500 px-4 mt-1">Skill Sharing Platform</p>
        <div className="mt-8 flex-1 flex flex-col">
          <nav className="flex-1 px-2 space-y-2">
            {sidebarNav.map((item) => (
              <button
                key={item.name}
                onClick={() => setDashboardPage(item.page)}
                className={`flex items-center px-3 py-3 text-lg font-medium rounded-md w-full ${
                  dashboardPage === item.page
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon className="mr-3 h-6 w-6" />
                {item.name}
              </button>
            ))}
          </nav>
        </div>
        <div className="border-t border-gray-200 p-4">
          <button
            onClick={handleLogout}
            className="flex items-center px-3 py-3 text-lg font-medium rounded-md w-full text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            <LogOut className="mr-3 h-6 w-6" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

function DashboardHeader({ user, handleLogout, navigateTo, dashboardPage }) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  
  const getTitle = () => {
    switch (dashboardPage) {
      case 'overview': return 'Dashboard Overview';
      case 'messages': return 'Messages';
      case 'community': return 'Community';
      case 'profile': return 'Edit Profile';
      case 'skills': return 'Add/Manage Skills';
      case 'favorites': return 'My Favorites';
      default: return 'Dashboard';
    }
  };

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="relative flex-shrink-0 flex h-20 px-4 md:px-8 justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">{getTitle()}</h1>
        
        <div className="relative">
          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            onBlur={() => setTimeout(() => setIsUserMenuOpen(false), 200)}
            className="flex items-center justify-center h-12 w-12 bg-yellow-400 text-gray-900 rounded-full font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {user.photoURL ? (
              <img src={user.photoURL} alt="Profile" className="h-12 w-12 rounded-full object-cover" />
            ) : (
              user.displayName ? user.displayName.split(' ').map(n => n[0]).join('').toUpperCase() : <User className="h-6 w-6" />
            )}
          </button>
          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50 overflow-hidden border border-gray-100">
              <div className="px-4 py-3 border-b border-gray-200">
                <p className="text-lg font-medium text-gray-900 truncate">{user.displayName}</p>
                <p className="text-base text-gray-500 truncate">{user.email}</p>
              </div>
              <div className="py-1">
                <button
                  onClick={() => { navigateTo('browse'); setIsUserMenuOpen(false); }}
                  className="flex items-center w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 transition duration-150"
                >
                  <Search className="h-5 w-5 mr-3" /> Browse Skills
                </button>
                <button
                  onClick={() => { navigateTo('settings'); setIsUserMenuOpen(false); }}
                  className="flex items-center w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 transition duration-150"
                >
                  <Settings className="h-5 w-5 mr-3" /> Settings
                </button>
              </div>
              <div className="border-t border-gray-200 py-1">
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full text-left px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 transition duration-150"
                >
                  <LogOut className="h-5 w-5 mr-3" /> Log Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function DashboardOverview({ user, profile, navigateTo, setDashboardPage }) {
  const stats = [
    { name: 'Skills Learning', value: 3, icon: GraduationCap },
    { name: 'Skills Teaching', value: 2, icon: Briefcase },
    { name: 'Community Points', value: 150, icon: Award },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Welcome back, {user.displayName}! Ready to learn and share skills?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-lg shadow-lg flex items-center">
            <div className="p-3 rounded-full bg-indigo-100 text-indigo-600 mr-4">
              <stat.icon className="h-8 w-8" />
            </div>
            <div>
              <p className="text-lg text-gray-500">{stat.name}</p>
              <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-yellow-400 p-8 rounded-lg shadow-lg text-gray-900">
          <h3 className="text-3xl font-bold mb-3">Find Skills to Learn</h3>
          <p className="text-lg mb-6">Discover new skills in your neighborhood.</p>
          <button 
            onClick={() => navigateTo('browse')}
            className="bg-gray-900 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-700 transition"
          >
            Explore Skills
          </button>
        </div>
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-white">
          <h3 className="text-3xl font-bold mb-3">Share Your Skills</h3>
          <p className="text-lg mb-6">Teach others what you know.</p>
          <button 
            onClick={() => setDashboardPage('skills')}
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg text-lg font-medium hover:bg-yellow-300 transition"
          >
            Start Teaching
          </button>
        </div>
      </div>
    </div>
  );
}

function ProfileTab({ profile, user }) {
  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);
  const [location, setLocation] = useState(profile.location);
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [preview, setPreview] = useState(profile.photoURL || null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;

    setIsUploading(true);
    setMessage('Updating profile...');
    
    try {
      const docRef = doc(db, "users", user.uid);
      let photoURL = profile.photoURL || '';

      if (file) {
        const storageRef = ref(storage, `profile-pics/${user.uid}`);
        await uploadBytes(storageRef, file);
        photoURL = await getDownloadURL(storageRef);
      }
      
      const updatedData = {
        name: name,
        bio: bio,
        location: location,
        photoURL: photoURL
      };
      
      await updateDoc(docRef, updatedData);
      
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL
      });
      
      setMessage('Profile updated successfully!');
      setFile(null);
    } catch (error) {
      console.error("Error updating profile: ", error);
      setMessage('Failed to update profile.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-1 flex flex-col items-center">
        <label htmlFor="profile-pic" className="cursor-pointer">
          <span className="text-lg font-medium text-gray-900 mb-2 block text-center">Profile Picture</span>
          {preview ? (
            <img src={preview} alt="Profile" className="h-40 w-40 rounded-full object-cover shadow-md" />
          ) : (
            <div className="h-40 w-40 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
              <User className="h-20 w-20" />
            </div>
          )}
          <span className="mt-3 flex items-center justify-center text-indigo-600 hover:text-indigo-500">
            <Upload className="h-5 w-5 mr-2" />
            {file ? file.name : 'Change picture'}
          </span>
        </label>
        <input
          id="profile-pic"
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={handleFileChange}
        />
      </div>
      
      <div className="md:col-span-2 space-y-6">
        <FormInput id="profileName" type="text" value={name} onChange={setName} placeholder="Your Full Name" Icon={User} />
        <FormInput id="profileLocation" type="text" value={location} onChange={setLocation} placeholder="Your Neighborhood" Icon={MapPin} />
        <FormTextArea id="profileBio" value={bio} onChange={setBio} placeholder="Tell your neighbors about yourself..." Icon={Info} />
        
        <div className="flex items-center space-x-4">
          <button
            type="submit"
            disabled={isUploading}
            className="flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition disabled:bg-gray-400"
          >
            {isUploading ? 'Saving...' : 'Save Changes'}
          </button>
          {message && (
            <span className={`flex items-center text-lg ${message.includes('Success') ? 'text-green-600' : 'text-red-600'}`}>
              <CheckCircle className="h-5 w-5 mr-2" />
              {message}
            </span>
          )}
        </div>
      </div>
    </form>
  );
}

function ManageSkillsTab({ user, profile }) {
  const [mySkills, setMySkills] = useState([]);
  const [loading, setLoading] = useState(true);

  const [skillName, setSkillName] = useState("");
  const [description, setDescription] = useState("");
  const [compensation, setCompensation] = useState("Monetary Fee");
  
  useEffect(() => {
    setLoading(true);
    const skillsQuery = query(collection(db, "skills"), where("teacherId", "==", user.uid));
    const unsubscribe = onSnapshot(skillsQuery, (querySnapshot) => {
      const skillsData = [];
      querySnapshot.forEach((doc) => {
        skillsData.push({ id: doc.id, ...doc.data() });
      });
      setMySkills(skillsData);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [user.uid]);

  const handleAddSkill = async (e) => {
    e.preventDefault();
    if (!skillName || !description) return;
    
    try {
      await addDoc(collection(db, "skills"), {
        teacherId: user.uid,
        teacherName: profile.name,
        skillName: skillName,
        description: description,
        compensation: compensation,
        createdAt: serverTimestamp()
      });
      setSkillName("");
      setDescription("");
      setCompensation("Monetary Fee");
    } catch (error) {
      console.error("Error adding skill: ", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Add a New Skill</h2>
        <form onSubmit={handleAddSkill} className="space-y-4">
          <FormInput id="skillName" type="text" value={skillName} onChange={setSkillName} placeholder="e.g., Guitar Lessons" Icon={Book} />
          <FormTextArea id="skillDesc" value={description} onChange={setDescription} placeholder="Describe your skill and teaching style..." Icon={Briefcase} />
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-900">Compensation</label>
            <select
              value={compensation}
              onChange={(e) => setCompensation(e.target.value)}
              className="w-full text-lg p-3 rounded-lg bg-gray-50 border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
            >
              <option>Monetary Fee</option>
              <option>Skill Exchange</option>
              <option>Flexible</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition"
          >
            <Plus className="h-6 w-6 mr-2" />
            Add Skill
          </button>
        </form>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Listed Skills</h2>
        {loading ? (
          <p>Loading skills...</p>
        ) : mySkills.length === 0 ? (
          <p className="text-lg text-gray-600">You haven't listed any skills yet.</p>
        ) : (
          <div className="space-y-4">
            {mySkills.map(skill => (
              <div key={skill.id} className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900">{skill.skillName}</h3>
                <p className="text-gray-600">{skill.compensation}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function MessagingTab({ user, navigateTo, initialConvo }) {
  const [conversations, setConversations] = useState([]);
  const [selectedConvo, setSelectedConvo] = useState(initialConvo || null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const convoQuery = query(
      collection(db, "conversations"),
      where("participants", "array-contains", user.uid),
      orderBy("lastMessageAt", "desc")
    );
    
    const unsubscribe = onSnapshot(convoQuery, (querySnapshot) => {
      const convos = [];
      querySnapshot.forEach(doc => {
        convos.push({ id: doc.id, ...doc.data() });
      });
      setConversations(convos);
      setLoading(false);
      
      if (initialConvo && !convos.find(c => c.id === initialConvo.id)) {
        setSelectedConvo(initialConvo);
      }
    });

    return () => unsubscribe();
  }, [user.uid, initialConvo]);
  
  useEffect(() => {
    if (!selectedConvo) {
      setMessages([]);
      return;
    }
    
    const messagesQuery = query(
      collection(db, "conversations", selectedConvo.id, "messages"),
      orderBy("timestamp")
    );
    
    const unsubscribe = onSnapshot(messagesQuery, (querySnapshot) => {
      const msgs = [];
      querySnapshot.forEach(doc => {
        msgs.push({ id: doc.id, ...doc.data() });
      });
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [selectedConvo]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedConvo) return;
    
    const text = newMessage;
    setNewMessage("");

    try {
      await addDoc(collection(db, "conversations", selectedConvo.id, "messages"), {
        text: text,
        senderId: user.uid,
        timestamp: serverTimestamp()
      });
      
      await setDoc(doc(db, "conversations", selectedConvo.id), {
        lastMessage: text,
        lastMessageAt: serverTimestamp()
      }, { merge: true });

    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  const getOtherParticipantName = (convo) => {
    const otherId = convo.participants.find(uid => uid !== user.uid);
    return convo.participantNames[otherId] || "Unknown User";
  };

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-200px)] border border-gray-300 rounded-lg shadow-lg overflow-hidden bg-white">
      <div className="w-full md:w-1/3 border-r border-gray-300 bg-white overflow-y-auto">
        {loading ? (
          <p className="p-4">Loading conversations...</p>
        ) : conversations.length === 0 ? (
          <p className="p-4 text-gray-600">No messages yet. Connect with a teacher to start a conversation.</p>
        ) : (
          conversations.map(convo => (
            <button
              key={convo.id}
              onClick={() => setSelectedConvo(convo)}
              className={`w-full text-left p-4 border-b border-gray-200 ${selectedConvo?.id === convo.id ? 'bg-indigo-50' : 'hover:bg-gray-50'}`}
            >
              <h3 className="text-lg font-semibold">{getOtherParticipantName(convo)}</h3>
              <p className="text-gray-600 truncate">{convo.lastMessage}</p>
            </button>
          ))
        )}
      </div>

      <div className="w-full md:w-2/3 flex flex-col bg-white">
        {!selectedConvo ? (
          <div className="flex-grow flex items-center justify-center">
            <p className="text-lg text-gray-500">Select a conversation to start chatting.</p>
          </div>
        ) : (
          <>
            <div className="p-4 border-b border-gray-300 bg-gray-50">
              <h2 className="text-xl font-bold">{getOtherParticipantName(selectedConvo)}</h2>
            </div>
            
            <div className="flex-grow p-4 space-y-4 overflow-y-auto">
              {messages.map(msg => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.senderId === user.uid ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`p-3 rounded-lg max-w-xs lg:max-w-md ${
                    msg.senderId === user.uid 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-gray-200 text-gray-900'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-300 bg-gray-50">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow text-lg p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700"
                >
                  Send
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function FavoritesTab({ navigateTo, user }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg text-center">
      <Heart className="h-16 w-16 text-indigo-300 mx-auto mb-4" />
      <h3 className="text-2xl font-bold text-gray-900 mb-2">My Favorites</h3>
      <p className="text-lg text-gray-600 mb-6">
        This is where you'll find all your saved skills and teachers. This feature is coming soon!
      </p>
      <button 
        onClick={() => navigateTo('browse')}
        className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-150 ease-in-out shadow-sm"
      >
        Browse Skills
      </button>
    </div>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      icon: UserSearch,
      name: '1. Find a Skill',
      description: "Browse categories or search for any skill you want to learn, from coding to cooking to crafting.",
    },
    {
      icon: MessageCircle,
      name: '2. Connect & Chat',
      description: "View a teacher's profile and start a secure, in-app conversation to ask questions and arrange a lesson.",
    },
    {
      icon: Zap,
      name: '3. Learn & Share',
      description: "Meet your local teacher and start learning! Pay with cash or exchange one of your own skills.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            How Hyperlocal Works
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Start learning from your neighbors in just 3 simple steps.
          </p>
        </div>
        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.name} className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600">
                <step.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">{step.name}</h3>
              <p className="mt-4 text-lg text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksPage() {
  return (
    <div className="bg-indigo-50 py-24 pt-44">
      <HowItWorksSection />
    </div>
  );
}

function AboutUsPage() {
  return (
    <section className="py-24 bg-white pt-44">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-gray-900">
            Our Mission
          </h2>
          <p className="mt-6 text-xl text-gray-700 leading-relaxed">
            We believe that everyone has something to teach, and everyone has something to learn. Your neighborhood is filled with incredible talent, from bakers and coders to gardeners and guitarists.
          </p>
          <p className="mt-6 text-xl text-gray-700 leading-relaxed">
            Hyperlocal was created to tap into that talent. Our mission is to build stronger, more connected communities by making skill sharing as easy as walking next door. We want to unlock the hidden expertise in every neighborhood, fostering a culture of mutual learning, respect, and growth—one skill at a time.
          </p>
          <p className="mt-6 text-xl text-gray-700 leading-relaxed">
            This platform is a Minimum Viable Product (MVP) focused on the core goal: connecting neighbors. We've intentionally excluded complex features like payment processing and scheduling to keep things simple and direct. It's all about the connection.
          </p>
        </div>
      </div>
    </section>
  );
}

function HelpPage() {
  const faqs = [
    {
      q: "Is Hyperlocal free to use?",
      a: "Yes! The platform is completely free to use for both Learners and Teachers. Any compensation for lessons (monetary or skill-exchange) is arranged directly between users.",
    },
    {
      q: "How do I get paid as a Teacher?",
      a: "As an MVP, we do not process payments. You arrange compensation directly with your Learner. You can request a monetary fee (via cash, Venmo, etc.) or a skill exchange. Be sure to agree on terms before you meet!",
    },
    {
      q: "How does messaging work?",
      a: "Our secure, in-app messaging system allows you to communicate with other users without sharing your personal phone number or email. When you click 'Connect' on a teacher's profile, a private conversation is created in your Dashboard.",
    },
    {
      q: "Why isn't there a rating or review system?",
      a: "To keep our MVP lean and focused, we've excluded a formal rating system for now. We encourage you to use the in-app chat to get a feel for the teacher before scheduling a lesson.",
    },
  ];

  return (
    <section className="py-24 bg-indigo-50 pt-44">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-16">
          Help Center (FAQ)
        </h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{faq.q}</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactUsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
    setIsSent(true);
  };

  return (
    <section className="py-24 bg-white pt-44">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-6">
          Contact Us
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Have a question or feedback? We'd love to hear from you.
        </p>

        {isSent ? (
          <div className="p-8 bg-green-50 border border-green-200 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-green-800">Message Sent!</h3>
            <p className="text-lg text-green-700 mt-2">
              Thanks for reaching out. We'll get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 bg-gray-50 rounded-lg shadow-lg space-y-6">
            <FormInput id="contact-name" type="text" value={name} onChange={setName} placeholder="Your Name" Icon={User} />
            <FormInput id="contact-email" type="email" value={email} onChange={setEmail} placeholder="Your Email" Icon={Mail} />
            <FormTextArea id="contact-message" value={message} onChange={setMessage} placeholder="Your Message..." Icon={MessageSquare} />
            
            <button
              type="submit"
              className="w-full flex items-center justify-center bg-indigo-600 text-white px-6 py-4 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-150 ease-in-out shadow-sm"
            >
              <Send className="h-6 w-6 mr-2" />
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function CommunityPage({ navigateTo, currentUser, isDashboard = false }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState("");
  const [newComment, setNewComment] = useState({});

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setPosts([
        {
          id: 'post1',
          authorName: 'Jane Doe',
          authorRole: 'Learner',
          timestamp: '2 hours ago',
          content: 'Just had my first guitar lesson with David L.! He was so patient and I already learned 3 chords. Can\'t wait for the next one!',
          likes: 5,
          comments: [
            { id: 'c1', authorName: 'David L.', content: 'You did great, Jane! Keep practicing!', timestamp: '1 hour ago' },
            { id: 'c2', authorName: 'Sarah K.', content: 'That\'s awesome! I\'ve been thinking of learning guitar too.', timestamp: '30 mins ago' },
          ]
        },
        {
          id: 'post2',
          authorName: 'Mike P.',
          authorRole: 'Teacher',
          timestamp: '1 day ago',
          content: 'I have an opening for one more student for my "Intro to Python" skill session this weekend. We\'ll cover basics, variables, and loops. Message me if you\'re interested!',
          likes: 12,
          comments: []
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;
    console.log("New post:", newPost);
    const post = {
      id: `post${posts.length + 1}`,
      authorName: currentUser?.displayName || "Anonymous",
      authorRole: "Learner",
      timestamp: "Just now",
      content: newPost,
      likes: 0,
      comments: []
    };
    setPosts([post, ...posts]);
    setNewPost("");
  };

  const handleCommentSubmit = (e, postId) => {
    e.preventDefault();
    const commentText = newComment[postId];
    if (!commentText || !commentText.trim()) return;
    console.log("New comment for", postId, ":", commentText);
    
    const comment = {
      id: `c${Math.random()}`,
      authorName: currentUser?.displayName || "Anonymous",
      content: commentText,
      timestamp: "Just now"
    };
    setPosts(posts.map(p => 
      p.id === postId ? { ...p, comments: [...p.comments, comment] } : p
    ));
    setNewComment(prev => ({ ...prev, [postId]: '' }));
  };

  const handleCommentChange = (postId, text) => {
    setNewComment(prev => ({
      ...prev,
      [postId]: text
    }));
  };

  const Wrapper = isDashboard ? 'div' : 'section';
  const wrapperProps = isDashboard ? {} : { className: "py-24 bg-gray-50 pt-44" };

  return (
    <Wrapper {...wrapperProps}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isDashboard && (
          <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-12">
            Community Forum
          </h2>
        )}

        {currentUser && (
          <form onSubmit={handlePostSubmit} className="mb-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Share with your neighbors</h3>
              <FormTextArea
                id="new-post"
                value={newPost}
                onChange={setNewPost}
                placeholder={`What's on your mind, ${currentUser.displayName}?`}
                Icon={MessageSquare}
              />
              <button
                type="submit"
                className="w-full mt-4 flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition"
              >
                <Send className="h-6 w-6 mr-2" />
                Post
              </button>
            </div>
          </form>
        )}

        {loading ? (
          <p className="text-center text-lg">Loading posts...</p>
        ) : (
          <div className="space-y-8">
            {posts.map(post => (
              <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700 font-bold">
                    {post.authorName.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-900">{post.authorName}</h4>
                    <p className="text-sm text-gray-500">{post.authorRole} • {post.timestamp}</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-800 mb-4">{post.content}</p>
                
                <div className="flex items-center space-x-4 border-b border-t border-gray-200 py-3">
                  <button className="flex items-center text-gray-600 hover:text-indigo-600">
                    <ThumbsUp className="h-5 w-5 mr-2" /> {post.likes} Likes
                  </button>
                  <div className="flex items-center text-gray-600">
                    <MessageSquareReply className="h-5 w-5 mr-2" /> {post.comments.length} Comments
                  </div>
                </div>
                
                <div className="mt-4 space-y-4">
                  {post.comments.map(comment => (
                    <div key={comment.id} className="flex">
                      <div className="flex-shrink-0 h-9 w-9 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold text-sm">
                        {comment.authorName.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </div>
                      <div className="ml-3 bg-gray-100 p-3 rounded-lg flex-1">
                        <p className="text-base">
                          <span className="font-bold text-gray-900">{comment.authorName}</span>{' '}
                          {comment.content}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{comment.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {currentUser && (
                  <form onSubmit={(e) => handleCommentSubmit(e, post.id)} className="mt-4 flex space-x-3">
                    <input
                      type="text"
                      value={newComment[post.id] || ''}
                      onChange={(e) => handleCommentChange(post.id, e.target.value)}
                      placeholder="Write a comment..."
                      className="flex-grow text-base p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700"
                    >
                      Reply
                    </button>
                  </form>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  );
}

function MyFavoritesPage({ navigateTo, currentUser }) {
  return (
    <section className="py-24 bg-white min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-12">
          My Favorites
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg shadow-inner text-center">
          <Heart className="h-16 w-16 text-indigo-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon!</h3>
          <p className="text-lg text-gray-600">
            This is where you'll find all your saved skills and teachers.
          </p>
        </div>
      </div>
    </section>
  );
}

function SettingsPage({ navigateTo, currentUser, handleLogout }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [preview, setPreview] = useState(null);
  
  useEffect(() => {
    if (!currentUser) {
      setLoading(false);
      return;
    }
    setLoading(true);
    const fetchProfile = async () => {
      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setProfile(data);
        setName(data.name);
        setBio(data.bio);
        setLocation(data.location);
        setPreview(data.photoURL || null);
      } else {
        console.error("No profile found for settings page!");
      }
      setLoading(false);
    };
    fetchProfile();
  }, [currentUser]);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) return;

    setIsUploading(true);
    setMessage('Updating profile...');
    
    try {
      const docRef = doc(db, "users", currentUser.uid);
      let photoURL = profile.photoURL || '';

      if (file) {
        const storageRef = ref(storage, `profile-pics/${currentUser.uid}`);
        await uploadBytes(storageRef, file);
        photoURL = await getDownloadURL(storageRef);
      }
      
      const updatedData = {
        name: name,
        bio: bio,
        location: location,
        photoURL: photoURL
      };
      
      await updateDoc(docRef, updatedData);
      
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL
      });
      
      setMessage('Profile updated successfully!');
      setFile(null);
    } catch (error) {
      console.error("Error updating profile: ", error);
      setMessage('Failed to update profile.');
    } finally {
      setIsUploading(false);
    }
  };
  
  if (loading) {
    return (
      <div className="py-24 px-4 text-center min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Loading settings...</p>
      </div>
    );
  }

  return (
    <section className="py-24 bg-gray-50 min-h-screen pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-12">
          Settings
        </h2>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden divide-y divide-gray-200">
          <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 flex flex-col items-center">
              <label htmlFor="profile-pic" className="cursor-pointer">
                <span className="text-lg font-medium text-gray-900 mb-2 block text-center">Profile Picture</span>
                {preview ? (
                  <img src={preview} alt="Profile" className="h-40 w-40 rounded-full object-cover shadow-md" />
                ) : (
                  <div className="h-40 w-40 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    <User className="h-20 w-20" />
                  </div>
                )}
                <span className="mt-3 flex items-center justify-center text-indigo-600 hover:text-indigo-500">
                  <Upload className="h-5 w-5 mr-2" />
                  {file ? file.name : 'Change picture'}
                </span>
              </label>
              <input
                id="profile-pic"
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={handleFileChange}
              />
            </div>
            
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">My Profile</h3>
              <FormInput id="profileName" type="text" value={name} onChange={setName} placeholder="Your Full Name" Icon={User} />
              <FormInput id="profileLocation" type="text" value={location} onChange={setLocation} placeholder="Your Neighborhood" Icon={MapPin} />
              <FormTextArea id="profileBio" value={bio} onChange={setBio} placeholder="Tell your neighbors about yourself..." Icon={Info} />
              
              <div className="flex items-center space-x-4">
                <button
                  type="submit"
                  disabled={isUploading}
                  className="flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition disabled:bg-gray-400"
                >
                  {isUploading ? 'Saving...' : 'Save Changes'}
                </button>
                {message && (
                  <span className={`flex items-center text-lg ${message.includes('Success') ? 'text-green-600' : 'text-red-600'}`}>
                    <CheckCircle className="h-5 w-5 mr-2" />
                    {message}
                  </span>
                )}
              </div>
            </div>
          </form>

          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Current Plan</h3>
            <div className="flex items-center justify-between">
              <p className="text-lg">
                You are on the <span className="font-bold text-indigo-600">Free Tier</span>
              </p>
              <button className="bg-indigo-100 text-indigo-700 px-5 py-2 rounded-lg text-lg font-medium hover:bg-indigo-200 transition">
                Upgrade (Coming Soon)
              </button>
            </div>
          </div>

          <div className="p-6">
            <button
              onClick={handleLogout}
              className="w-full max-w-xs flex items-center justify-center bg-red-100 text-red-700 px-6 py-3 rounded-lg text-lg font-medium hover:bg-red-200 transition duration-150 ease-in-out"
            >
              <LogOut className="h-6 w-6 mr-2" />
              Log Out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

