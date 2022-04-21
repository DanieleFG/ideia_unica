 function pais(request, response)
 {
     const  dynamicDate = new Date();
// objeto Response sendo retornado como o resultado 
     response.json({
         //O método toGMTString() converte a data para uma cadeia de caracteres (string),
         date: dynamicDate.toGMTSring()
     })

     
 }
 export default pais;