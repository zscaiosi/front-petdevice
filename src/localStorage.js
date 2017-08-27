//Carrega o state já salvo no localStorage, se houver.
export const loadState = () => {
  try{
    const serializedState = localStorage.getItem("login");
    if( serializedState === undefined || serializedState === null ){
      //console.log("serialized und---->", serializedState);
      return undefined;
    }else{
      return JSON.parse(serializedState);
    }
  }catch(e){
    console.log("Exception: ",e);
  }
}
//Pega o state do redux e passa para o localStorage.login
export const saveState = (state) => {
  try{
    const serialezdState = JSON.stringify(state);
    localStorage.setItem("login", serialezdState);
  }catch(e){
    console.log("Exception: ",e);
  }
}

export const clearState = () => {
  try{
    localStorage.clear();
    document.location.reload();
  }catch(e){

  }
}