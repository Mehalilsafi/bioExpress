import { supabaseServerClient } from '@/app/db/supaBaseServer';
import SignIn from './components/form';
import NavBar from './components/navBar';
import { redirect } from 'next/navigation';

export default async function page() {
    const {
        data: { user },
    } = await supabaseServerClient.auth.getUser();

    if (user) {
        redirect('/');
    }

    return (
        <div>
            <NavBar />
            <SignIn />
        </div>
    );
}
