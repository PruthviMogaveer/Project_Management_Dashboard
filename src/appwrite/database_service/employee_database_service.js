import conf from "../../conf/conf";
import { Client, Databases } from 'appwrite';

export class EmployeeDatabaseService {
    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID)

        this.databases = new Databases(this.client)
    }

    async getEmployees() {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteEmployeesCollectionID
            )
        } catch (error) {
            console.log("Appwrite service :: getEmployees :: error", error)
        }
    }

    async createEmployee({ name, email, projects }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteEmployeesCollectionID,
                { name, email, projects }
            )
        } catch (error) {
            console.log("Appwrite service :: createEmployees :: error", error)
        }
    }

    async deleteEmployee(employeeId) {
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteEmployeesCollectionID,
                employeeId
            )
        } catch (error) {
            console.log("Appwrite service :: deleteEmployees :: error", error)
        }
    }
}

const employeeDatabaseService = new EmployeeDatabaseService();

export default employeeDatabaseService