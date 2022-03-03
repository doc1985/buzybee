import React from "react";
import axios from "../services/axios";
import { ApiJob } from "../store/models/job";
import { useQuery } from "react-query";
import { Text, Box } from "native-base";
import JobList from "../components/JobList";

const JobListPage = () => {
  const fetchJobs = async () => {
    const response = await axios.get<ApiJob>("jobs");
    return response.data.jobs;
  };

  const { data, status } = useQuery("jobs", fetchJobs);

  if (status == "loading") {
    return <Text>loading</Text>;
  }

  if (status == "error") {
    return <Text>Error</Text>;
  }

  return (
    <Box
      style={{ flex: 1 }}
      _dark={{ background: "coolGray.300" }}
      background="white"
      safeArea
    >
      <Box
        flex={1}
        px="4"
        _dark={{ background: "coolGray.300" }}
        background="white"
      >
        <JobList data={data} />
      </Box>
    </Box>
  );
};

export default JobListPage;
