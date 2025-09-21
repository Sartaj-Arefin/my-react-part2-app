export default function Friend({ friend }) {
  console.log(friend);
  const { id, name, username, email, phone, company } = friend;

  return (
    <div className="card">
      <h4>
        {id}. {name}
      </h4>
      <h5>Username: {username} </h5>
      <h5>Email: {email} </h5>
      <h5>Phone: {phone} </h5>
      <h5>Company: {company.name} </h5>
    </div>
  );
}
