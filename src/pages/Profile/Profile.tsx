import { useState, useEffect, useRef } from "react";
import { Camera, Save, Edit3, User, Briefcase, Phone, GraduationCap } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { useAuth } from "../../context/AuthContext";
import { apiService } from "../../api/apiService";
import Swal from "sweetalert2";

export default function Profile() {
  const { user, login } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    mobile: "",
    qualification: "",
    designation: "",
    avatar: "",
  });

  useEffect(() => {
    if (user) {
      setProfileData({
        name: user.name || "",
        email: user.email || "",
        mobile: user.mobile || "",
        qualification: user.qualification || "",
        designation: user.designation || "",
        avatar: user.avatar || `https://ui-avatars.com/api/?name=${user.name || 'User'}&background=16a34a&color=fff&size=200`,
      });
    }
  }, [user]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const res = await apiService.updateProfile(profileData);
      if (res.success) {
        Swal.fire({
          icon: "success",
          title: "Profile Updated",
          timer: 1500,
          showConfirmButton: false,
        });
        // Refresh profile in context
        const token = localStorage.getItem("token");
        if (token) login(token); 
        setIsEditing(false);
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "Please try again later.",
      });
    }
  };

  const handleImageClick = () => {
    if (isEditing && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setProfileData({ ...profileData, avatar: e.target.result as string });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          
          {/* Header Banner */}
          <div className="h-48 bg-gradient-to-r from-green-600 to-emerald-400 relative">
            <div className="absolute top-4 right-4">
              <button 
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-5 py-2 rounded-full font-medium transition flex items-center gap-2"
              >
                {isEditing ? <><Save size={18} /> Save Profile</> : <><Edit3 size={18} /> Edit Profile</>}
              </button>
            </div>
          </div>

          {/* Profile Info */}
          <div className="px-8 pb-12">
            
            {/* Avatar Section */}
            <div className="relative -mt-24 mb-8 flex justify-center sm:justify-start">
              <div 
                className={`relative w-40 h-40 rounded-full border-4 border-white bg-white shadow-lg overflow-hidden ${isEditing ? 'cursor-pointer group' : ''}`}
                onClick={handleImageClick}
              >
                <img src={profileData.avatar} alt="Profile" className="w-full h-full object-cover" />
                {isEditing && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="text-white" size={32} />
                  </div>
                )}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-500 flex items-center gap-2 mb-1">
                    <User size={16} /> Full Name
                  </label>
                  {isEditing ? (
                    <input 
                      type="text" 
                      name="name" 
                      value={profileData.name} 
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition outline-none"
                    />
                  ) : (
                    <p className="text-xl font-bold text-gray-900">{profileData.name}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500 flex items-center gap-2 mb-1">
                    <Phone size={16} /> Mobile Number
                  </label>
                  {isEditing ? (
                    <input 
                      type="text" 
                      name="mobile" 
                      value={profileData.mobile} 
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition outline-none"
                    />
                  ) : (
                    <p className="text-lg text-gray-800 font-medium">{profileData.mobile}</p>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-500 flex items-center gap-2 mb-1">
                    <GraduationCap size={16} /> Qualification
                  </label>
                  {isEditing ? (
                    <input 
                      type="text" 
                      name="qualification" 
                      value={profileData.qualification} 
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition outline-none"
                    />
                  ) : (
                    <p className="text-lg text-gray-800 font-medium">{profileData.qualification}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500 flex items-center gap-2 mb-1">
                    <Briefcase size={16} /> Designation
                  </label>
                  {isEditing ? (
                    <input 
                      type="text" 
                      name="designation" 
                      value={profileData.designation} 
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition outline-none"
                    />
                  ) : (
                    <p className="inline-block px-4 py-2 bg-green-50 text-green-700 rounded-lg font-medium">
                      {profileData.designation}
                    </p>
                  )}
                </div>
              </div>

            </div>

            {isEditing && (
              <div className="mt-10 pt-8 border-t border-gray-100 flex justify-end gap-4">
                <button 
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-3 rounded-xl border border-gray-200 font-medium text-gray-600 hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSave}
                  className="px-6 py-3 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 shadow-md shadow-green-200 transition flex items-center gap-2"
                >
                  <Save size={18} /> Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
