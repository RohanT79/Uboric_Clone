const Validation = (value) => {

    let errors={};
    if (!value.name){
        errors.name="Name is required."
    }
    if(!value.email){
        errors.email="Email is required."
    }
    if (!value.password){
        errors.password="Password is required ."
    }
  return errors;
}

export default Validation