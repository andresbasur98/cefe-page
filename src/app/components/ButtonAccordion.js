'use client'

export const ButtonAccordion = (id) => {
  const toggleAccordion = (id) => {
    const content = document.getElementById(`accordion-content-${id}`);
    if(content === null) return
    const maxHeight = content.style.maxHeight;
    
    if (maxHeight === "0px" || maxHeight === "") {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = "0px";
    }
  };
  return (
    <button
      onClick={toggleAccordion(id)}
      className="w-full text-left px-4 py-3 bg-gray-200 hover:bg-gray-300 rounded-t-lg"
    >
      <h3 className="text-lg font-semibold">¿Qué es Tailwind CSS?</h3>
    </button>
  );
};
