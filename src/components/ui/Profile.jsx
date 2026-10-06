import "./Profile.css";
function Profile({ name, image }) {
  const firstLetter = name?.charAt(0).toUpperCase();

  return (
    <div className="profile">
      {image ? (
        <img src={image} alt="profile" className="avatar" />
      ) : (
        <div className="avatar-fallback">
          {firstLetter}
        </div>
      )}

      <span className="profile-name">{name}</span>
    </div>
  );
}
export default Profile;