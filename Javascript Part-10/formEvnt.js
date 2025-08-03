let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
   
    // let user = document.querySelector("#user");
    //   let pass = document.querySelector("#pass");
      console.dir(form);
      let user = this.elements[0]; // = form.elements[0];
      let pass = this.elements[1];
      // console.log(user.value);
      // console.log(pass.value);

      alert(`Hi  ${user.value} and password ${pass.value}`);
});