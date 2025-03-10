import { getMenu } from "@/lib/shopify";

const Navbar = async () => {

const menu=await getMenu("konbini-picks-menu")
    return ( <nav></nav> );
}
 
export default Navbar;