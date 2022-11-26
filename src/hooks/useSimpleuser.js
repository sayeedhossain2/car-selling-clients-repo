import { useEffect, useState } from "react";

const useSimpleuser = (email) => {
  const [isUsers, setIsUsers] = useState(false);
  const [isUsersLoading, SetIsUsersLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/simpleusers/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsUsers(data.isSimpleuser);
          SetIsUsersLoading(false);
        });
    }
  }, [email]);
  return [isUsers, isUsersLoading];
};

export default useSimpleuser;
