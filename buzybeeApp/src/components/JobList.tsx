import React from "react";
import { FlatList, Center } from "native-base";
import JobListItem from "./JobListItem";
import { IJob } from "../store/models/job";

type Props = {
  data: [IJob] | undefined;
};

const JobList = ({ data }: Props) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <JobListItem job={item} />}
      keyExtractor={(item, index) => item._id}
    />
  );
};

export default JobList;
