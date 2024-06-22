import { supabaseServerClient } from '@/app/db/supaBaseServer';
import SignIn from './components/form';
import NavBar from './components/navBar';
import { redirect } from 'next/navigation';

export default async function page() {
    const {
        data: { user },
    } = await supabaseServerClient.auth.getUser();
    if (user) {
        if (Object.keys(user).length) {
            if (user.user_metadata.role === 'seller') {
                redirect('/seller');
            } else if (user.user_metadata.role === 'delivery') {
                redirect('/delivery');
            } else if (user.user_metadata.role === undifiend) {
                redirect('/dashboard');
            } else {
                r;
            }
        }
    }

    console.log('====================================');
    console.log(user);
    console.log('====================================');

    return (
        <div>
            <NavBar />
            <SignIn />
        </div>
    );
}
