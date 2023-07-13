import sakib from "../assets/sakib.jpg";

const ProfileCard = () => {
  const skills = [
    {
      id: 1,
      name: "HTML",
      emoji: "💪",
      color: "#fde047",
    },
    {
      id: 2,
      name: "CSS",
      emoji: "💪",
      color: "#bef264",
    },
    {
      id: 3,
      name: "JS",
      emoji: "💪",
      color: "#67e8f9",
    },
    {
      id: 4,
      name: "React",
      emoji: "💪",
      color: "#86efac",
    },
  ];

  const Card = ({ name, emoji, color }) => {
    return (
      <div>
        <p style={{ backgroundColor: color }}>
          {name}
          {emoji}
        </p>
      </div>
    );
  };
  return (
    <div style={{ width: "25em" }}>
      <img src={sakib} alt="" width={300} />
      <p>This is Sakib. A front-end developer.</p>
      {skills.map(({ id, name, color, emoji }) => (
        <Card key={id} name={name} color={color} emoji={emoji} />
      ))}
    </div>
  );
};

export default ProfileCard;
