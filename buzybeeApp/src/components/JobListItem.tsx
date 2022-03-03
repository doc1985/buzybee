import React from "react";
import { Box, Heading, Text, HStack, Spacer, VStack, Stack } from "native-base";
import Moment from "moment";
import { IJob } from "../store/models/job";

interface JobListItemProps {
  job: IJob;
}

const JobListItem = (props: JobListItemProps) => {
  const { job } = props;
  return (
    <Box
      w="100%"
      borderRadius="md"
      shadow="3"
      _dark={{
        background: "gray.700",
      }}
      my="2"
      background="gray.200"
      pl="4"
      pr="5"
      py="2"
    >
      <HStack space={3} justifyContent="space-between" width="100%">
        <VStack space={4} width="100%">
          <Stack>
            <Heading
              _dark={{
                color: "warmGray.50",
              }}
              color="coolGray.800"
              bold
            >
              {job.position}
            </Heading>
            <Text
              fontSize="lg"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              {job.organizationName}
            </Text>
            <Text
              fontSize="md"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              {job.address.city}, {job.address.state} {job.address.zip}
            </Text>
            <Text>{job.shortDescription}</Text>
          </Stack>
          <Stack>
            <HStack>
              <Text fontSize="sm">
                ${job.salary.min} - ${job.salary.max}
              </Text>
              <Spacer />
              <Text fontSize="sm">
                {Moment(job.createdAt).format("MM/DD/YYYY")}
              </Text>
            </HStack>
          </Stack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default JobListItem;
