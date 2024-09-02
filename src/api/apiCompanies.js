import supabaseClient from "@/utils/supabase";

export async function getCompanies(token) {
    const supabase = await supabaseClient(token)
    const {data, error} = await supabase.from('companies').select('*')
    if(error){
        console.log("Error Fetching Companies:", error)
        return null
    }
    return data
}

export async function addNewCompany(token,_,companyData) {
    const supabase = await supabaseClient(token)
    const random = Math.floor(Math.random()*9000)
    const fileName = `logo-${random}-${companyData.name}`

    const {error: storageError} = await supabase.storage.from('company-logo').upload(fileName, companyData.logo)
    if(storageError){
        console.log("Error uploading company logo:", storageError)
        return null
    }
    const logo_url = `${supabase}/storage/v1/object/public/company-logo/${fileName}`
    const {data, error} = await supabase.from('companies').insert([{
        name: companyData.name,
        logo_url
    }]).select()

    if(error){
        console.error("Error Submitting Company:", error)
    }
    return data
}