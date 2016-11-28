if (!Meteor.users.findOne({"username": "employees"})) {
  var employeesId = Accounts.createUser({
    profile: {
      name: "Employees"
    },
    username: "employees",
    password: "123abc"
  });
  //Roles.addUserToRoles( employeesId ,  ["mark1-employees"] );
  console.log('Created User "mark1 employee role" - ID: ' + employeesId);
  //console.log('"employees" is admin: ' + Roles.userHasRole(employeesId, "admin"));
}

if (!Meteor.users.findOne({"username": "administrators"})) {
  var adminId = Accounts.createUser({
    profile: {
      name: "Administrators"
    },
    username: "administrators",
    password: "123abc"
  });
  //Roles.addUserToRoles( adminId ,  ["mark1-administrators"] );
  console.log('Created User "mark1 admin role" - ID: ' + adminId );
  //console.log('"employees" is admin: ' + Roles.userHasRole(adminId, "admin"));
}
