import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/PratikDhungel';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('Default User');

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (response.status >= 200 && response.status <= 299) {
        const user = await response.json();
        setIsLoading(false);
        setUser(user.name);
      } else {
        setIsLoading(false);
        setIsError(true);
        throw new Error(response.statusText);
      }
    } catch (err) {
      console.log(err);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h2>Error</h2>
      </div>
    );
  }
  return (
    <div>
      <h2>{user}</h2>
    </div>
  );
};

export default MultipleReturns;
