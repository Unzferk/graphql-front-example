import axios from "axios";
import { gql } from "@apollo/client";
import { taskURL } from "../config/api";

import gqlClient from "../graphql/client";

export const getCourses = () => {
  return gqlClient
    .query({
      query: gql`
        {
          getCourses {
            code
            active
            title
            description
            students {
              dni
              first_name
              last_name
            }
          }
        }
      `,
    })
    .then((res) => res.data.getCourses);
};

export const getSingleCourse = (id) => {
  // return axios.get(taskURL + '/' + id).then(res => res.data)
  return gqlClient
    .query({
      query: gql`{
            course(code: ${id}) {
                title
                description
                code
            }
        }`,
    })
    .then((res) => res.data.courses);
};

/**
 *
 * @param {title, description} data
 */
export const addTask = (data) => {
  data.date = new Date();
  data.completed = false;
  return axios.post(taskURL, data).then((res) => res.data);
};

export const deleteTask = (id) => {
  return axios.delete(taskURL + "/" + id).then((res) => res.data);
};
