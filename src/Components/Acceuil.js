import React from 'react'
import { Link } from 'react-router-dom'

const Acceuil = () => {
    return (
        <div>

           <div class="button">
           <Link to="/food/">

	<span>Button</span>
	</Link>
</div>

<div class="button3">
<Link to="/Listesphotos/">

	<span><div>B</div><div>u</div><div>t</div><div>t</div><div>o</div><div>n</div></span>
    </Link>
</div> 
        </div>
    )
}

export default Acceuil
