import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className=" text-gray-50 py-4  bottom-0 w-full">
            <div className="container mx-auto flex justify-between items-center py-2 border-t-2 border-opacity-50 border-gray-400">
                <div>
                    <p className='opacity-50'> Made by Jin</p>
                </div>

                {/* Div for icons */}
                <div className='flex'>
                    <div className='mx-2'>
                        <Link href={'https://github.com/jincabia'}>
                            <Image
                                src='/githubIcon.png'
                                width={30}
                                height={30}
                                alt='Github'
                            />
                        </Link>
                        
                    </div>

                    <div className='mx-2'>
                        <Link href={'https://www.linkedin.com/in/jin-francis-cabia/'}>
                            <Image
                                src='/linkedInIcon.png'
                                width={30}
                                height={30}
                                alt='LinkedIn'
                            />
                        
                        </Link>
                        
                    </div>
                </div>
            </div>
        </footer>
    );
}
