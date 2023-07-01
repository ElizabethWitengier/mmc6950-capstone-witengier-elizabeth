import { useState, useEffect } from "react";

export function ModalRoot() {
  const [modal, setModal] = useState({});

  useEffect(() => {
    ModalService.on("open", ({ component, props }) => {
      setModal({
        component,
        props,
        close: () => {
          setModal({});
        },
      });
    });
  }, []);

  const ModalComponent = modal.component ? modal.component : null;

  return (
    <section className={modal.component ? "modalRoot" : ""}>
      {ModalComponent && (
        <ModalComponent
          {...modal.props}
          close={modal.close}
          className={ModalComponent ? "block" : ""}
        />
      )}
    </section>
  );
}

export function Modal(props) {
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="modal-dialog mt-10">
          <div className="modal-content bg-white rounded-lg p-4">
            {props.children}
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black/30" />
    </div>
  );
}

export function ModalBody(props) {
  return <div className="modal-body">{props.children}</div>;
}

export function ModalHeader(props) {
  return (
    <div className="modal-header text-xl font-semibold">{props.children}</div>
  );
}

export function ModalFooter(props) {
  return <div className="modal-footer">{props.children}</div>;
}

export const ModalService = {
  on(event, callback) {
    document.addEventListener(event, (e) => callback(e.detail));
  },
  open(component, props = {}) {
    document.dispatchEvent(
      new CustomEvent("open", { detail: { component, props } })
    );
  },
};
