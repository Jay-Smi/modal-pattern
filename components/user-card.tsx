'use client';

import { useQuery } from '@tanstack/react-query';
import { Badge, Button, Card, Group, Image, Skeleton, Text } from '@mantine/core';

import { userStore } from '@/api/mock-user-api-store';

interface IUserCard {
  id: string;
}

export const UserCard = ({ id }: IUserCard) => {
  const { data: user } = useQuery({
    queryKey: ['user', id],
    queryFn: async () => userStore.getState().getUser(id),
  });

  if (!user) return <Skeleton height={386} />;

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>A user card</Text>
        <Badge color="red">Alert</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla sit natus omnis quod
        sapiente excepturi debitis a vel error obcaecati. Officia dignissimos eum dolore dolor
        voluptates eos quam at corporis.
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Edit User
      </Button>
    </Card>
  );
};
