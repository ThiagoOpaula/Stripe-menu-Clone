import React, { useRef, useState, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDimensions } from './dimensions';
import { Context } from './Provider';

const lastOptionId = 0;

type Props = {
  name: string;
  content: () => void;
  backgroundHeight: number;
};

export const DropdownOption: React.FC<Props> = ({
  name,
  content: Content,
  backgroundHeight,
}: Props) => {
  const idRef = useRef(+lastOptionId);
  const id = idRef.current;

  const [optionHook, optionDimenstion] = useDimensions();
  const [registered, setRegistered] = useState(false);

  const {
    registerOption,
    updateOptionProps,
    deleteOptionById,
    setTargetId,
    targetId,
  } = useContext(Context);

  useEffect(() => {
    if(!registered && optionDimenstion) {
      const WrappedContent = () => {
        const contentReft = useRef();

        return (
          <div>
            <Content />
          </div>
        )
      }
    }
  }, [])
  return (
    <motion.button type="button" className="dropdown-option">
      {name}
    </motion.button>
  );
};
