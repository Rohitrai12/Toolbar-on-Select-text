import React, { useState, useEffect } from 'react';

function TiptapEditor() {
    const [isTextSelected, setIsTextSelected] = useState(false);
    const [toolbarPosition, setToolbarPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        const handleMouseUp = (e) => {
            const selection = window.getSelection();
            if (selection && selection.toString().trim()) {
                const range = selection.getRangeAt(0);
                const rect = range.getBoundingClientRect();

                // Show the toolbar near the selected text
                setToolbarPosition({ top: rect.top - 60, left: rect.left });
                setIsTextSelected(true);
            } else {
                setIsTextSelected(false);
            }
        };

        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <div style={{ position: 'relative', padding: '20px' }}>
            <div>
                Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusamus, dolores nemo tempore sunt, laborum doloremque rem, officiis impedit neque eos quaerat cumque. Error consequuntur, eligendi suscipit dicta nobis minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos quam quae laboriosam, exercitationem repudiandae, ad, voluptatum culpa sunt magni minus provident illo facilis nisi? Saepe molestias dolore nihil eveniet, quidem iste architecto. Exercitationem, sequi sed deleniti ea harum saepe inventore vel voluptates repudiandae reiciendis maiores fugit corrupti mollitia totam odit ab tempora debitis aliquam, at alias, eum ratione. Delectus quibusdam laborum deserunt, hic inventore magnam corrupti veritatis quia illo odit autem beatae doloremque esse voluptate in nihil numquam, eius quos praesentium quisquam animi obcaecati officiis. Ducimus magni magnam repellendus ad veniam autem aliquam consectetur enim iure? Eum aliquid cupiditate vero nostrum. Sunt iure iste exercitationem modi reprehenderit! Voluptatum eum dolorem dolores quia, pariatur aliquid esse odit et eligendi optio animi laboriosam eos exercitationem ipsum dolore consectetur alias quaerat dolorum natus atque adipisci minus assumenda at corrupti. Nulla temporibus ipsa ullam itaque hic eum ut, illo architecto dolorum blanditiis corporis commodi iste explicabo ducimus enim quasi. Perferendis repellat earum nostrum eaque a fugiat distinctio incidunt ad ea magnam! Officiis, dicta reprehenderit natus blanditiis fugiat, eos repellendus porro, accusamus deleniti deserunt commodi dolorum nobis aut. Et assumenda eveniet cumque sunt ut quia eius vel dolorem quidem a magnam voluptate, omnis sed cupiditate, sapiente sequi dolor error odio qui? Omnis molestiae possimus architecto quae iure accusantium sequi! Ab a recusandae aspernatur obcaecati iure voluptas doloremque sunt labore molestiae dolores, iusto deleniti eligendi tenetur, totam quos nesciunt, magni nemo doloribus architecto itaque praesentium. Consequatur dolor, quaerat eius accusamus fugit neque illum, vero commodi, explicabo totam officiis culpa laborum cum assumenda aspernatur voluptates officia nisi consequuntur at aliquid vitae. Possimus iste suscipit temporibus. Enim quas deserunt ullam in minima dicta tenetur officia cumque laboriosam qui fugiat voluptas nisi, necessitatibus quidem dolor. Repellendus, sit hic esse magnam impedit quibusdam, rerum quidem harum necessitatibus porro excepturi. Suscipit laboriosam delectus numquam molestias assumenda. Consequatur ipsa minus consectetur? Tenetur, voluptate ad ratione sed consequuntur culpa esse incidunt ducimus quia at ipsum perferendis sit reprehenderit minus possimus a voluptates eligendi vero quos doloribus quo nemo. Soluta, nesciunt ducimus. Iste laboriosam aliquid saepe accusamus optio? Ea aut voluptatum, explicabo delectus quis fugit incidunt, inventore odit eligendi placeat autem? Rem sint sit vel culpa iste, quidem odio veritatis! Nihil, vel incidunt explicabo veniam nam aspernatur quibusdam? Ipsum vitae, repellendus accusamus fugiat praesentium expedita hic tempora aliquid! Beatae, a reprehenderit! Aspernatur laboriosam natus nostrum at minima ut nobis vero dolorem, sequi veniam! sit amet, consectetur adipisicing elit. Alias aliquam sunt aliquid voluptatem rerum officiis consequuntur, fugit doloremque molestiae eaque quod eius nemo similique nisi mollitia ex perferendis dolore illum.
            </div>
            {isTextSelected && (
                <div
                    style={{
                        position: 'absolute',
                        top: toolbarPosition.top + window.scrollY,
                        left: toolbarPosition.left + window.scrollX,
                        background: '#333',
                        color: '#fff',
                        padding: '12px',
                        borderRadius: '8px',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
                        width: '300px',
                        zIndex: 1000,
                        transition: 'opacity 0.3s ease-in-out',
                        opacity: 1,
                    }}
                >
                    <div style={{ marginBottom: '12px', borderBottom: '1px solid #555', paddingBottom: '12px' }}>
                        <input
                            type="text"
                            placeholder="Enter custom prompt..."
                            style={{
                                width: '100%',
                                padding: '8px 12px',
                                borderRadius: '4px',
                                border: '1px solid #555',
                                backgroundColor: '#222',
                                color: '#fff',
                                fontSize: '14px',
                                boxSizing: 'border-box', // Ensure box-sizing is set correctly
                            }}
                        />
                    </div>
                    <div style={{ padding: '6px 0' }}>
                        <div style={{ padding: '6px 0', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <span style={{ marginRight: '8px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M13.498 5.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H2.502a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h10.996zM2.002 6v4h11.996V6H2.002z" />
                                    <path d="M9.999 11H6v1h3.999v-1zm0-4H6v3h3.999V7z" />
                                </svg>
                            </span>
                            Improve writing
                        </div>
                        <div style={{ padding: '6px 0', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <span style={{ marginRight: '8px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M11 1a1 1 0 0 1 1 1v3h-1V2h-4v3h-1V2a1 1 0 0 1 1-1h4zM3 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8h-1v4H3V2z" />
                                </svg>
                            </span>
                            Fix mistakes
                        </div>
                        <div style={{ padding: '6px 0', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <span style={{ marginRight: '8px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M14 9a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h10a1 1 0 0 1 1 1zM4 5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H4z" />
                                </svg>
                            </span>
                            Simplify
                        </div>
                    </div>
                    <div style={{ padding: '6px 0', borderTop: '1px solid #555', paddingTop: '8px' }}>
                        <div style={{ padding: '6px 0', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <span style={{ marginRight: '8px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M9.293 1.293a1 1 0 0 1 1.414 0L14 4.586a1 1 0 0 1 0 1.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L11.586 6H3a1 1 0 1 1 0-2h8.586L9.293 2.707a1 1 0 0 1 0-1.414z" />
                                </svg>
                            </span>
                            Summarise
                        </div>
                        <div style={{ padding: '6px 0', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <span style={{ marginRight: '8px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M12 1.5a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5h8zm0 1h-8v10h8v-10zM8.5 3h1v6.5a.5.5 0 0 1-1 0V3zM6.5 3h-1v6.5a.5.5 0 0 1-1 0V3z" />
                                </svg>
                            </span>
                            Translate into...
                        </div>
                        <div style={{ padding: '6px 0', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <span style={{ marginRight: '8px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 0a4 4 0 0 1 4 4H9a1 1 0 0 0-2 0H4a4 4 0 0 1 4-4zM8 12a4 4 0 0 1-4-4h2a1 1 0 0 0 2 0h2a4 4 0 0 1-4 4z" />
                                </svg>
                            </span>
                            Change style to...
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TiptapEditor;
