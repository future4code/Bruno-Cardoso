import { connection } from "../index";

export async function dbGetAllMovies(): Promise<any> {
    try {
        const result = await connection
        .select("*")
        .from("Movies")
        .limit(15)
    } catch (error) {
        
    }
}
