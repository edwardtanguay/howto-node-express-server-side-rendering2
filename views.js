export const siteView = ({employees}) => {
    return `
<h1>Info Site</h1>	
<p>There are ${employees.length} employees</p>
<ul>
	${employees.map((employee) => `<li>${employee.lastName}</li>`).join('')}
</ul>
	`;
};
