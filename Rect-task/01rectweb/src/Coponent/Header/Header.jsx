import List from "../Lists/List";
const Header = ()=>{
    let a ="hello wold"

    const menus =['Home','Women','Men','Shop','page','Blog','Contect'];

    return(
        <>

        <tbody align="center">

        <table border="0" cellspacing="0" cellpadding="1" align="center" width="1140">
			<tr height="50">
				<td width="200"><img src="images1/logo.webp"width="100" alt="logo"/>{a}</td>
				<td width="690">
						<table border="0" cellspacing="0" cellpadding="1" align="center" width="690">
							<tr> 
								{
                                    menus.map((menu)=>{
                                        return(
                                            <List menus = {menu} a={a} />
                                        )
                                    })
                                }
							</tr>
						</table>
				</td>
				<td width="100"><a href="#"><font color="#11111">login</font></a>/<a href="#"><font color="#11111">Register</font></a></td>
				<td width="50"><img src="images1/search.jpg" width="50"alt="serch" /></td>
				<td width="50"><img src="images1/heart.png" width="25"alt="heart"/></td>
				<td width="50"><img src="images1/note.jpg" width="25"alt="note"/></td>
			</tr>
		</table>
        </tbody>
        </>
    )
}
export default Header