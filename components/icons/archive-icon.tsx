import { SVGProps } from 'react';

export function ArchiveInfo(props: SVGProps<SVGSVGElement>) {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 24 24"
                aria-hidden="true"
                {...props}
            >
                <title>archive</title>
                <path
                    fill="currentColor"
                    d="M12 10q-.425 0-.712.288T11 11v3.2l-.9-.9q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l2.6 2.6q.3.3.7.3t.7-.3l2.6-2.6q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275l-.9.9V11q0-.425-.288-.712T12 10M5 8v11h14V8zm0 13q-.825 0-1.412-.587T3 19V6.525q0-.35.113-.675t.337-.6L4.7 3.725q.275-.35.687-.538T6.25 3h11.5q.45 0 .863.188t.687.537l1.25 1.525q.225.275.338.6t.112.675V19q0 .825-.587 1.413T19 21zm.4-15h13.2l-.85-1H6.25zm6.6 7.5"
                ></path>
            </svg>
            <span className="sr-only">archive</span>
        </>
    );
}
