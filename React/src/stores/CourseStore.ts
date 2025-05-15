// // // // // import { makeAutoObservable } from "mobx"

// // // // // // export type courseType = {
// // // // // //     "id"?: number,
// // // // // //     "teacherId"?:number,
// // // // // //     "title": string,
// // // // // //     "teacher"?: string,
// // // // // //     "numberOfLessons"?: number
// // // // // //     "description"?: string,
// // // // // //     "lessons"?: string[],
// // // // // // }

// // // // // export type courseType = {
// // // // //     // "id"?: number,
    
// // // // //     "username": string,
// // // // //     "password"?: string,
// // // // //     "email"?: number
// // // // //     "phoneNumber"?: string,
// // // // //     // "lessons"?: string[],
// // // // // }
// // // // // class CourseStore {
// // // // //     [x: string]: any

// // // // //     list: courseType[] = []

// // // // //     constructor() {
// // // // //         makeAutoObservable(this)
// // // // //     }

// // // // //     async fetchCourses() {
// // // // //         const response = await fetch('https://localhost:7183/api/User', {
// // // // //             method: 'GET',
// // // // //             headers: {
// // // // //                 'Content-Type': 'application/json',
// // // // //             },
// // // // //         });

// // // // //         if (!response.ok) {
// // // // //             throw new Error('Network response was not ok');
// // // // //         }

// // // // //         const data = await response.json();
// // // // //         this.list = data;
// // // // //     };

// // // // //     // async addCourse(course: courseType, userId: number){
// // // // //     //     const response = await fetch('https://localhost:7183/api/User', {
// // // // //     //         method: 'POST',
// // // // //     //         headers: {
// // // // //     //             'Content-Type': 'application/json',
// // // // //     //             'user-id': userId.toString()
// // // // //     //         },
// // // // //     //         body: JSON.stringify({...course}),
// // // // //     //     });
        
// // // // //         // if (!response.ok) {
// // // // //         //     throw new Error('Network response was not ok');
// // // // //         // }
// // // // //     // }
// // // // // }

// // // // // export default new CourseStore()

// // // // import axios from 'axios';

// // // // export type courseType = {
// // // //     [x: string]: any;
// // // //     // [x: string]: null;
// // // //     folderId:number,
// // // //     teacherId:number,
// // // //     title: string,
// // // //     teacherName?: string,
// // // //     description?: string,
// // // //     numberOfLessons?: number,
    
// // // // }

// // // // class CourseStore {
// // // //     list: courseType[] = [];

// // // //     constructor() {
// // // //         // במקרה שאתה רוצה להשתמש במשהו כמו makeAutoObservable, תוכל להוסיף אותו כאן
// // // //     }

// // // //     async fetchCourses() {
// // // //         try {
// // // //             const response = await axios.get('/Folder');
// // // //             this.list = response.data;
// // // //         } catch (error) {
// // // //             console.error('Error fetching courses:', error);
// // // //             throw new Error('Failed to fetch courses');
// // // //         }
// // // //     }

// // // //     // async addCourse(course: courseType, teacherId: number) {
// // // //     //     try {
// // // //     //         const response = await axios.post('/Folder', { ...course }, {
// // // //     //             headers: {
// // // //     //                 'user-id': teacherId.toString()
// // // //     //             }
// // // //     //         });
// // // //     //         // אם צריך, תוכל לעדכן את הרשימה כאן לאחר הוספת הקורס
// // // //     //         this.list.push(response.data);
// // // //     //     } catch (error) {
// // // //     //         console.error('Error adding course:', error);
// // // //     //         throw new Error('Failed to add course');
// // // //     //     }
// // // //     // }
// // // // }

// // // // export default new CourseStore();
// // // import ApiService from '../ApiService';
// // // // import api from '../ApiService'; // עדכן את הנתיב הנכון

// // // class CourseStore {
// // //     list = [];

// // //     async fetchCourses() {
// // //         try {
// // //             this.list = await ApiService.getCourses(); // שליפת הקורסים
// // //         } catch (error) {
// // //             console.error("Error fetching courses:", error);
// // //         }
// // //     }
// // // }

// // // export default new CourseStore();
// // // CourseStore.ts
// // // import { observable, action } from 'mobx';
// // // import ApiService from '../ApiService'; // עדכן את הנתיב הנכון
// // // import { Course } from '../CourseTypes'; // עדכן את הנתיב הנכון

// // // class CourseStore {
// // //     @observable
// // //     list: Course[] = []; // הגדרת סוג המערך

// // //     @action
// // //     async fetchCourses() {
// // //         try {
// // //             this.list = await ApiService.getCourses(); // שליפת הקורסים
// // //         } catch (error) {
// // //             console.error("Error fetching courses:", error);
// // //         }
// // //     }
// // // }

// // // export default new CourseStore();
// // // src/stores/CourseStore.ts
// // import { observable, action } from 'mobx';
// // import ApiService from '../ApiService'; // ודא שהנתיב נכון
// // import { Course } from '../CourseTypes'; // ודא שהנתיב נכון

// // class CourseStore {
// //     @observable
// //     list: Course[] = []; // הגדרת סוג המערך

// //     @action
// //     async fetchCourses() {
// //         try {
// //             this.list = await ApiService.getCourses(); // שליפת הקורסים
// //         } catch (error) {
// //             console.error("Error fetching courses:", error);
// //         }
// //     }
// // }

// // export default new CourseStore();
// // import { observable, action } from 'mobx';
// // import ApiService from '../ApiService'; // ודא שהנתיב נכון
// // import { CourseType } from '../CourseTypes'; // ודא שהנתיב נכון

// // class CourseStore {
// //     // @observable
// //     list: CourseType[] = []; // הגדרת סוג המערך

// //     // @action
// //     async fetchCourses() {
// //         try {
// //             this.list = await ApiService.getCourses(); // שליפת הקורסים
// //         } catch (error) {
// //             console.error("Error fetching courses:", error);
// //         }
// //     }
// // }

// // export default new CourseStore();
// import { makeAutoObservable } from 'mobx';
// import ApiService from '../ApiService'; // ודא שהנתיב נכון
// import { CourseType } from '../CourseTypes'; // ודא שהנתיב נכון

// class CourseStore {
//     list: CourseType[] = []; // הגדרת סוג המערך

//     constructor() {
//         makeAutoObservable(this); // הפיכת המאפיינים ל-observable
//     }

//     async fetchCourses() {
//         try {
//             this.list = await ApiService.getCourses(); // שליפת הקורסים
//         } catch (error) {
//             console.error("Error fetching courses:", error);
//         }
//     }
// }

// export default new CourseStore();
import { makeAutoObservable } from 'mobx';
import ApiService from '../ApiService'; // ודא שהנתיב נכון
import { CourseType } from '../CourseTypes'; // ודא שהנתיב נכון

class CourseStore {
    list: CourseType[] = []; // הגדרת סוג המערך

    constructor() {
        makeAutoObservable(this); // הפיכת המאפיינים ל-observable
    }

    // הגדרת פעולה לשינוי הרשימה
    // @action
    setCourses(courses: CourseType[]) {
        this.list = courses; // עדכון הרשימה
    }

    async fetchCourses() {
        try {
            const courses = await ApiService.getCourses(); // שליפת הקורסים
            this.setCourses(courses); // שימוש בפעולה כדי לעדכן את הרשימה
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    }
}

export default new CourseStore();
