'use client';

import { Center, Grid, Loader } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';

import { userStore } from '@/api/mock-user-api-store';
import { UserCard } from '@/components/user-card';

const HomePage = () => {
  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: async () => userStore.getState().getUsers(),
  });

  if (!users) {
    return (
      <Center h={100}>
        <Loader size={60} />
      </Center>
    );
  }
  return (
    <Grid>
      {users.map((user) => (
        <Grid.Col key={user.id} span={{ base: 12, md: 6, lg: 3 }}>
          <UserCard id={user.id} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default HomePage;
