import { courseApi } from "../api";
import { Course, CourseReview } from "../types";

const getAllByCategory = async (limit: number, category?: string) => {
  try {
    const response = await fetch(courseApi.getAllByCategory(), {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ category: category, limit: limit }),
    });

    const data: Course[] = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

const createReview = async (review: CourseReview) => {
  try {
    const response = await fetch(courseApi.createReview(), {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(review),
    });

    return response;
  } catch (e) {
    console.log(e);
  }
};

export const courseHandler = {
  getAllByCategory,
  createReview,
};
