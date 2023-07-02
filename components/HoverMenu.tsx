import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { isEmpty } from 'lodash';
export default function HoverMenu({
  label,
  items,
  color = '',
}: {
  label: string;
  items: string[];
  color?: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleMenuEnter = () => {
    onOpen();
  };

  const handleMenuLeave = () => {
    onClose();
  };

  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        px={8}
        py={2}
        aria-label="treatment"
        _hover={{
          color: 'blue.500',
        }}
        fontWeight="bold"
        color={color ? color : ''}
        onMouseEnter={handleMenuEnter}
        fontSize="sm"
        textTransform="uppercase"
        onMouseLeave={handleMenuLeave}
      >
        {label}
      </MenuButton>
      {!isEmpty(items) && (
        <MenuList
          mt={-2}
          borderRadius="0"
          onMouseEnter={handleMenuEnter}
          onMouseLeave={handleMenuLeave}
          style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
        >
          {items.map((item, index) => (
            <MenuItem fontWeight="bold" fontSize="sm" key={index}>
              {item}
            </MenuItem>
          ))}
        </MenuList>
      )}
    </Menu>
  );
}
