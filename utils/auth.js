import { compare, hash } from "bcryptjs";

async function hashPassword(password){
    const hashPassword=await hash(password,12);
    return hashPassword
}

async function verifyPassword(password,hashPassword){
    const isValid=await compare(password,hashPassword)
    return isValid
}


export default {hashPassword,verifyPassword}