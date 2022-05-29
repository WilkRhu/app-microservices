import { ObjectId } from "mongodb";


export interface GitHub {
   readonly _id?: ObjectId;
   readonly user: string;
   readonly repository: string;
   readonly issues: [{
       readonly title: string,
       readonly author: string,
       readonly labels: string,
    }];
   readonly contributors: [{
       readonly name: string,
       readonly qt_commits: number
    }];


}