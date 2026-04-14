import {Subject} from "@/types";

export const API_URL = "https://api.fake-rest.refine.dev";
export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        name: "Introduction to Algorithms",
        code: "CS101",
        description: "A foundational course covering basic data structures, algorithmic paradigms (divide and conquer, dynamic programming), and complexity analysis.",
        department: "CS",
        createdAt: "2026-01-15T08:30:00Z"
    },
    {
        id: 2,
        name: "Linear Algebra",
        code: "MATH201",
        description: "Study of vector spaces, linear transformations, matrices, systems of linear equations, eigenvalues, and eigenvectors.",
        department: "MATH",
        createdAt: "2026-02-20T10:00:00Z"
    },
    {
        id: 3,
        name: "Modern Literature",
        code: "ENG305",
        description: "An exploration of major literary movements, themes, and influential texts from the 20th and 21st centuries.",
        department: "ENGLISH",
        createdAt: "2026-03-10T14:45:00Z"
    }
];