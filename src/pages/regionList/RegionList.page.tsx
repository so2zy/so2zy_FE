import styled from 'styled-components';
import { Header } from '@components/common/Header';
import { Footer } from '@components/common/Footer';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

export const RegionList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  const onSendClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'token123',
      },
      body: JSON.stringify({ content }),
    });
  };

  return (
    <StyledContainer>
      <Header />
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}

      <div>
        <input
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button onClick={onSendClick}>Send</button>
      </div>
      <Footer />
    </StyledContainer>
  );
};

const StyledContainer = styled.div``;
