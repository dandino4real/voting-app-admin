import { PropsWithChildren } from 'react';
import Navigation from './_components/_layouts/Navigation';
import { NullResponsiveWrapper } from './_components/null-responsive-wrapper';

const AdminLayout = ({ children }: PropsWithChildren) => {
    return (
        <NullResponsiveWrapper>

            <div className='w-full h-screen flex'> {/* Use flex for full-height layout */}
                <Navigation />
                <div className='flex-1 overflow-auto border border-[#F1EAEA]'> {/* Make main content area scrollable */}
                    <main className='font-primary p-0 sm:p-2 md:p-12'>
                        {children}
                    </main>
                </div>
            </div>
        </NullResponsiveWrapper>

    );
};

export default AdminLayout;
