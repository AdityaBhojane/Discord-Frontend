
import React, { useRef } from 'react';
import PluseIconForInput from '../icons svgs/PluseIconForInput';
import StickerIcon from '../icons svgs/StickerIcon';
import EmojiIcon from '../icons svgs/EmojiIcon';

const DiscordInput: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Adjust the height of the textarea dynamically
  const handleInputChange = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Adjust height based on content
    }
  };

  return (
    <div className="relative flex items-start bg-[#383A40] text-white rounded-lg px-4 py-3 shadow-md mt-auto mb-5 m-3">
      {/* Left Button (Attachment) */}
      <button
        className="text-gray-400 hover:text-white focus:outline-none mr-2"
        title="Add Attachments"
      >
        <PluseIconForInput />
      </button>

      {/* Text Input / Text Area */}
      <textarea
        ref={textareaRef}
        onChange={handleInputChange}
        className="flex-1 bg-transparent resize-none border-none outline-none text-sm placeholder-gray-400 max-h-40 overflow-y-auto scrollbar-none"
        placeholder="Message #general"
        rows={1}
      ></textarea>
      {/* <div
        role='textbox'
        contentEditable
        onChange={(e)=> console.log(e.target)}
        className="flex-1 bg-transparent resize-none border-none outline-none text-sm placeholder-gray-400  overflow-y-auto scrollbar-none"
      ></div> */}

      {/* Right Buttons */}
      <div className="flex items-center space-x-2 ml-2">
        <StickerIcon />
        <EmojiIcon />
      </div>
    </div>
  );
};

export default DiscordInput;
