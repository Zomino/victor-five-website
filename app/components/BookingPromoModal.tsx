"use client";

import { useEffect } from "react";

import { Button, Group, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconAlertTriangle } from "@tabler/icons-react";

export default function BookingPromoModal() {
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if (!sessionStorage.getItem("bookingPromoDismissed")) {
      open();
    }
  }, [open]);

  const handleClose = () => {
    sessionStorage.setItem("bookingPromoDismissed", "true");
    close();
  };

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      centered
      title={
        <Group gap="sm">
          <IconAlertTriangle size={20} />
          <Text fw={600}>Limited Spots This Month</Text>
        </Group>
      }
      radius="lg"
      padding="xl"
    >
      <Text mb="md" c="gray.8">
        Only a handful of 1:1 coaching slots remain this month. Reserving now helps you avoid the
        waitlist.
      </Text>
      <Group justify="flex-end" mt="md">
        <Button color="black" onClick={handleClose}>
          OK
        </Button>
      </Group>
    </Modal>
  );
}
