import { PropsWithChildren } from 'react';
import Navigation from './_components/_layouts/Navigation';


const AuthenticatedLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className='h-full w-full'>
            <div className='mx-auto h-full w-full max-w-[1560px]'>
                <div className='grid h-full w-full grid-cols-1 grid-rows-[auto_1fr] lg:grid-cols-[minmax(10rem,_22%)_1fr] lg:grid-rows-1 xl:grid-cols-[minmax(14rem,_15%)_1fr]'>
                    <Navigation />
                    <div className='h-full w-full grid-cols-1 grid-rows-[auto_1fr] overflow-hidden border border-[#F1EAEA] lg:grid'>

                        <main className='bg-[#F1F6F9] font-primary h-full p-12 w-full overflow-scroll'>
                            {children}
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthenticatedLayout;
