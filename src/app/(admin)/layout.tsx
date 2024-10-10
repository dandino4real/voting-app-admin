import { PropsWithChildren } from 'react';
import Navigation from './_components/_layouts/Navigation';

const AdminLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className='h-screen flex'> {/* Use flex for full-height layout */}
            <Navigation />
            <div className='flex-1 overflow-auto border border-[#F1EAEA]'> {/* Make main content area scrollable */}
                <main className='bg-[#F1F6F9] font-primary p-12'>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
