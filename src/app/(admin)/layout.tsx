import { PropsWithChildren } from 'react';
import Navigation from './_components/_layouts/Navigation';
import { NullResponsiveWrapper } from './_components/null-responsive-wrapper';

const AdminLayout = ({ children }: PropsWithChildren) => {
    return (
        <NullResponsiveWrapper>

            <div className='h-screen flex'> {/* Use flex for full-height layout */}
                <Navigation />
                <div className='flex-1 overflow-auto border border-[#F1EAEA]'> {/* Make main content area scrollable */}
                    <main className='bg-[#F1F6F9] font-primary p-12'>
                        {children}
                    </main>
                </div>
            </div>
        </NullResponsiveWrapper>

    );
};

export default AdminLayout;
