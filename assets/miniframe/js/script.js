/*  navbar menu collapse scriptas 
*
*@MiniFrame css karkasas Lic GNU
*Author Darius Jakaitis, author web site http://www.manowebas.lt
*java script for menu
*/
 function toggle() {
	const navItem = document.querySelectorAll('.nav-items')
	navItem.forEach(nav => nav.classList.toggle('navbar-toggle'));
	}
 document.querySelector('.nav-link-toggle').addEventListener('click', toggle);
