import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { isEmpty } from 'lodash';
import Link from 'next/link';

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

  const [isBelow1372px] = useMediaQuery('(max-width: 1372px)');

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
        fontSize={isBelow1372px ? 'xs' : 'sm'}
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
            <Link href={`/treatment/${item}`}>
              <MenuItem
                fontWeight="bold"
                fontSize={isBelow1372px ? 'xs' : 'sm'}
                key={index}
              >
                {item}
              </MenuItem>
            </Link>
          ))}
        </MenuList>
      )}
    </Menu>
  );
}
