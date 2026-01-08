import { forwardRef } from "react"

export const PreviewFrame = forwardRef<HTMLIFrameElement>(
    function PreviewFrame(_,ref){
        return <div>
             <iframe
                ref={ref}
                style={{
                    width: "100%",
                    height: "100vh",
                    border: "1px solid #ddd",
             }}
        />
        </div>
    }
)