import React, { ReactNode } from "react";
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
} from "react-native";
import { Background } from "../Background";

import { styles } from "./styles";

type Props = ModalProps & {
  closeModal: () => void;
  children: ReactNode;
};

export const ModalView: React.FC<Props> = ({
  closeModal,
  children,
  ...rest
}: Props) => {
  return (
    <Modal transparent statusBarTranslucent animationType="slide" {...rest}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
