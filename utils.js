let newMat = [[],
              [],
              []];           
  
function mutiplyMatrices(mat1, mat2){
   let width = mat1[0].length;
   let height = mat2.length;
   let k1 = 0;
   let k2 = 0;
   let j1 = 0;
   let j2 = 0;
   let t = 0;
   let result = 0;

   if(width === height){ 
     while(k1<height){
       while (j2<width){
         while(j1<width){
            result += mat1[k1][j1] * mat2[k2][j2];
            k2++;
            j1++;
         }
        newMat[t].push(result);
        result=0;
        k2=0;
        j1=0;
        j2++;
      }
      t++;
      j1=0;
      j2=0;
      k2=0;
      k1++;
     }
    return newMat;
   }   
 else {
   return null;
 }
}


function printMatrix(mat) {
    let result = "";
        
    for(let row = 0; row < mat.length; row++) {
        for(let col = 0; col < mat[row].length; col++) {
            result += mat[row][col] + "\t";
        }
        result += "\n";
     }

    console.log(result);
  }
     
module.exports = {
     mutiplyMatrices,
     printMatrix
  }
