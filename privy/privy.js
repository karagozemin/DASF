// Project data
let projects = [
    { id: 1, name: "Project A", goal: 100, currentProgress: 80 },
    { id: 2, name: "Project B", goal: 100, currentProgress: 120 },
    { id: 3, name: "Project C", goal: 100, currentProgress: 40 },
  ];
  
  // Fund Distribution Function
  function distributeFunds() {
    projects.forEach(project => {
      // Goal achievement status
      let progressPercentage = (project.currentProgress / project.goal) * 100;
  
      if (progressPercentage >= 100) {
        console.log(`${project.name} has reached its goal! Full funding provided.`);
      } else if (progressPercentage >= 75) {
        console.log(`${project.name} is close to its goal! 75% funding provided.`);
      } else if (progressPercentage >= 50) {
        console.log(`${project.name} has reached a medium level of its goal! 50% funding provided.`);
      } else {
        console.log(`${project.name} is below the target! 20% funding provided.`);
      }
    });
  }
  
  // Distribute the funds
  distributeFunds();